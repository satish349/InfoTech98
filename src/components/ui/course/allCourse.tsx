"use client";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from "next/navigation";


interface CourceProps{
    title:string,
    description:string,
    category:string,
    thumbnail_Url:string,
    old_price:string,
    new_price:string,
    id: number
}

const CourceComponents = (props:CourceProps) =>{    
    const router = useRouter();
    const handleClick = () => {
        let id = props.id
        router.push(`/course/alpha/${id}/`);
    }
    return(
        <>
            <div className="hover:shadow-xl/50 hover:scale-110 mb-5 hover:bg-white hover:duration-700 bg-slate-100 h-90 w-60 md:w-140 md:h-50 border-1 m-auto  shadow-xl/20 py-7 px-0 md:px-10 rounded-sm md:flex-wrap flex gap-20 text-base/8">
                <div className="flex items-center">
                    <img className="w-40 h-30 rounded-sm shadow-xl" src={props.thumbnail_Url} alt="Image" />
                </div>
                <div className="relative">
                    <h1 className="text-xl text-slate-800 font-semibold">{props.title}</h1>
                    <h2 className=" text-blue-800 font-semibold">{props.category}</h2>
                    <div className="flex gap-4">
                        <p className="line-through opacity-80"> &#8377;{props.old_price}</p>
                        <p className="font-semibold"> &#8377;{props.new_price}</p>
                    </div>
                    <div className="mt-1 flex gap-5 absolute bottom-0">
                        <button onClick={handleClick} className="hover:ease-out flex items-center gap-1 py-1 px-5 bg-slate-700 text-white rounded-sm cursor-pointer">
                            Details
                            <MdDoubleArrow/>
                        </button>
                        <button className="flex items-center gap-1 py-1 px-5 bg-slate-700 text-white rounded-sm cursor-pointer">
                            Enroll
                            <MdDoubleArrow/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CourceComponents;