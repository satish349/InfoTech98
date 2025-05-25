"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const FooterPages = () => {
    return(
        <>
            <section className="mt-10">
            <hr className="opacity-50"/>
                <div className=" py-10 text-white">
                    <div className="flex align-center w-full gap-20 justify-between px-50">
                        <div className="w-140 text-justify">
                            <h1 className="text-3xl font-bold mb-5">Satish Kumar</h1>
                            <p>" software developer passionate about building efficient, scalable applications."
With hands-on experience gained through real-world projects during the course, Satish quickly transitioned from learning to implementing. He now works confidently with modern development stacks, continuously honing his skills and contributing to collaborative tech teams.</p>
                            <div className="flex align-center justify-center mt-5">
                                <FaTwitter onClick={() => {location.replace("https://x.com/Satishk32540559")}} className="text-4xl p-2 bg-slate-700 text-black border-1 rounded-full mx-2 hover:duration-600 hover:scale-120 text-white cursor-pointer"/>
                                <FaLinkedin onClick={() => {location.replace("https://www.linkedin.com/in/satish-kumar-40ab25253/")}}  className="text-4xl p-2 bg-slate-700 text-black border-1 rounded-full mx-2 hover:duration-600 hover:scale-120 text-white cursor-pointer"/>
                                <FaGithub onClick={() => {location.replace("https://github.com/satish349")}}  className="text-4xl p-2 bg-slate-700 text-black border-1 rounded-full mx-2 hover:duration-600 hover:scale-120 text-white cursor-pointer"/>
                                <FaInstagram onClick={() => {location.replace("https://www.instagram.com/satishskjoy/")}}  className="text-4xl p-2 bg-slate-700 text-black border-1 rounded-full mx-2 hover:duration-600 hover:scale-120 text-white cursor-pointer"/>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold mb-3">Quicks Link</h1>
                            <div>
                                <Link href="/">Home</Link><br />
                                <Link href="/about">About</Link><br />
                                <Link href="/course">Course</Link><br />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold mb-3">Contact Us</h1>
                            <p>Get In Touch</p>
                            <a href="mailto:satishskjoy@gmail.com">Email : satishkumar848210@gmail.com</a>

                        </div>
                    </div>
                    <hr className="my-10 opacity-100"/>
                    <div className="text-center">
                        <p>Copyright &copy; 2025 Designed by ❤️, All rights reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FooterPages;