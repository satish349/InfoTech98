
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // Only needed in server component (not here)


// Define a schema for input validation
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })


export async function POST(req:Request){
    try {
        
        const body = await req.json();
        const {email, username, password} = body;

        //check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where:{
                email:email
            }
        });
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "User Already exist with this email"}, {status: 409});
        }

        //check if userName already exists
        const existingUserByUserNAme = await db.user.findUnique({
            where:{
                username:username
            }
        });
        if(existingUserByUserNAme){
            return NextResponse.json({user: null, message: "User Already exist with this UserName"}, {status: 409});
        }

        const hashedPassword = await hash(password,10);
        const now = new Date();
        const newUser = await db.user.create({
            data:{
                username,
                email,
                password: hashedPassword,
                createdAt: now,
                updatedAt: now
            }
        })

        const { password: newUserPassword, ...userData } = newUser;

        // Create JWT
        const token = jwt.sign(
          {
            email: userData.email,
            username: userData.username,
            sub: userData.id, // typically "sub" is user ID
          },
          process.env.JWT_SECRET!, // Ensure this is set in .env
          {
            expiresIn: '7d',
            jwtid: crypto.randomUUID(), // Add jti
          }
        );

        // Create response
        const response = NextResponse.json(
          { user: userData, message: "User Created Successfully" },
          { status: 201 }
        );

        // Set JWT in HTTP-only cookie
        response.cookies.set('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;

    } catch (error) {
        return NextResponse.json({
            message:"Somthing went wrong Please try again"
        }, {status:500})
    }
}