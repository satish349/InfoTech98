
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import { useLoading } from "@/app/providers/loading-provider";

const EnquirePage = () =>{
    return(
        <>
            <div className="bg-[url(/asset/img4.jpg)] h-120 w-full bg-center bg-cover flex items-center px-15">
                <div>
                    <h1 className="text-3xl text-white text-shadow-xl/30 mb-5">
                        If you have any queries, then 
                        <span className="text-emerald-500 font-bold"> contact us</span>.
                    </h1>
                    <Link href={"/contact"}>
                        <button className="bg-slate-800 font-semibold text-white rounded-sm py-2 px-5 border-1 hover:scale-105 hover:duration-700 hover:bg-slate-300 hover:text-slate-900 cursor-pointer">Enquire Now</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default EnquirePage;