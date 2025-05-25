"use client"
import React from "react";
import {TypeAnimation} from "react-type-animation";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
const IntroPage = () =>{
    return (
        <>
            <div className="flex py-30 px-80 xl:text-start text-center justify-between flex-wrap animate-gradient-x bg-gradient-to-r from-slate-800 via-blue-900 to-slate-500 bg-[length:200%_200%]">
                <div className="w-130">
                    <h1 className="text-3xl font-semibold mb-2">Learn & become the</h1>
                    <h1 className="text-3xl font-semibold text-blue-500 mb-4">top 1% Developer</h1>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Web developer',
                            1000, 
                            'Artificial Intelligence',
                            1000,
                            'Cyber Security',
                            1000,
                            'Data Science',
                            1000
                        ]}
                        wrapper="span"
                        speed={40}
                        className="text-2xl"
                        repeat={Infinity}
                    /> <br />
                    <Link href="/course">
                        <button className="flex text-xl font-semibold bg-slate-900 hover:bg-slate-800 hover:duration-700 py-3 px-9 my-5 rounded-sm cursor-pointer md:ml-25 sm:ml-0 xl:ml-0 ml-0" >
                            <span className="text-amber-500 mr-2">Ultimate</span>
                            <span className="text-white">Career Solution</span>
                            <span className="text-white text-3xl"><MdKeyboardArrowRight/></span>
                        </button>
                    </Link>
                </div>
                <img className="h-60 w-80" src="/asset/v11.gif" alt="My anime gif" />

            </div>
        </>
    )
}

export default IntroPage;