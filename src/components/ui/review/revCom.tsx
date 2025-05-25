import React from "react";

interface RevCompPagesProps {
    img: string;
    name: string;
    title: string;
    des: string;
}

const RevCompPages = (props:RevCompPagesProps) =>{
    return(
        <>
            <div className=" w-90 h-120 bg-slate-200 py-8 px-10 bg-slate-900 border-1 rounded-tr-full rounded-bl-lg m-auto">
                <img className="h-40 w-40 m-auto rounded-full border-2 border-yellow-900 p-1" src={props.img} alt="Img" />
                <h1 className="text-2xl font-bold text-blue-800 mt-5">{props.name}</h1>
                <h3 className="text-xl font-semibold my-1.5 text-yellow-600">{props.title}</h3>
                <p className="text-justify">{props.des}</p>
            </div>
        </>
    )
}
export default RevCompPages;