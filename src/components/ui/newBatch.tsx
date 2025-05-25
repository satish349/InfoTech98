import Link from "next/link";
import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const NewBatch = () =>{
    return(
        <>
            <div className=" text-center bg-slate-800 py-15 animate-gradient-x bg-gradient-to-r from-slate-800 via-blue-900 to-slate-500 bg-[length:200%_200%]">
                <h1 className="text-2xl font-semibold pb-4 text-yellow-400">New Placement Prep Batch🔥</h1>
                <h2 className="text-xl font-semibold pb-4">NewBatch : DSA + Development + APTITUDE</h2>
                <p className="text-xl">Start your placement preparation today!</p>
                <Link href="/course">
                    <button aria-label="Explore courses" className="flex m-auto bg-slate-900 text-white py-2 mt-5 hover:bg-blue-800 hover:duration-700 rounded-sm cursor-pointer px-5">
                        <h3 className="text-xl">Explore</h3> <MdOutlineDoubleArrow className="text-3xl"/>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default NewBatch;