import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const query = formData.get('query');

    if (!name || !email || !mobile || !query) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'satishkumar848210@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Query.</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Query:</strong> ${query}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import nodemailer from 'nodemailer';

// export async function POST(req:Request){
//     try {
//         const formData = await req.formData();
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const mobile = formData.get('mobile');
//         const query = formData.get('query');

//         if(!name || !email || !mobile || !query){
//             return NextResponse.json({success:false, message:"Some fields are not fill properly"}, {status:400})
//         }
        
//     } catch (error) {
        
//     }
// }