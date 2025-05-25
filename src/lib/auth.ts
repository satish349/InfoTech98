import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {

    adapter:PrismaAdapter(db),
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:'/sign-in',
    },

    providers: [ 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter your email or user name..." },
        password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
        
            if(!credentials?.email || !credentials.password){
                return null;
            }

            const existingUser = await db.user.findUnique({
                where:{email:credentials?.email}
            });

            if(!existingUser){
                return null;
            }

            const passwordMath = await compare(credentials.password, existingUser.password);

            if(!passwordMath){
                return null;
            }

            return{
                id:`${existingUser.id}`,
                username:existingUser.username || "",
                email:existingUser.email,
                role: existingUser.userRole,
            }
        }
    })
    ],

    callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.name = user.name || profile?.name || null;
        token.email = user.email;
        token.picture = user.image|| null;
      }
       // Always fetch role from DB
      if (token.email) {
        const dbUser = await db.user.findUnique({
          where: { email: token.email },
          select: { userRole: true },
        });
        token.role = dbUser?.userRole || "USER";
      }
      return token;
    }, 
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
}