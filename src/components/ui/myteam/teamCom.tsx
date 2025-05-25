import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

type TeamProps = {
    full_name:string,
    title:string,
    description:string,
    thumbnail_Url:string,
    linkedIn:string,
    github:string,
    instagram:string,
    twitter:string
}

const TeamComp = (props:TeamProps) => {

    return(
        <>
            <section className="text-white w-200 flex border-1 border-black py-10 px-15 rounded-lg bg-gray-200 my-5">
                <div className="flex justify-center items-center w-full gap-10">
                    <img className="h-40 w-40 rounded-full p-1 border-1" src={props.thumbnail_Url || "/asset/img1.jpg"} alt="Image" />
                    <div className="w-120 ">
                        <h1 className="font-semibold text-3xl text-yellow-900 my-1">{props.full_name}</h1>
                        <h2 className="font-semibold text-2xl text-pink-500 my-2 text-slate-900">{props.title}</h2>
                        <p className="text-justify text-slate-900">{props.description}</p>
                        <div className="flex justify-center items-center text-2xl rounded-full text-slate-900 gap-5 mt-4">
                            
                            {props.twitter && (
                            <Link href={props.twitter}>
                                <FaTwitter className="bg-slate-300 hover:text-red-900 hover:duration-700 cursor-pointer" />
                            </Link>
                            )}
                            {props.instagram && (
                            <Link href={props.instagram}>
                                <FaInstagram className="bg-slate-300 hover:text-red-900 hover:duration-700 cursor-pointer" />
                            </Link>
                            )}
                            {props.github && (
                            <Link href={props.github}>
                                <FaGithub className="bg-slate-300 hover:text-red-900 hover:duration-700 cursor-pointer" />
                            </Link>
                            )}
                            {props.linkedIn && (
                            <Link href={props.linkedIn}>
                                <FaLinkedin className="bg-slate-300 hover:text-red-900 hover:duration-700 cursor-pointer" />
                            </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamComp;