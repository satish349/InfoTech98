import React from "react";

interface components{
    img:string,
    title:string,
}
const MyCoursesPage = (props:components) =>{
    return(
        <>
            <div className="relative h-100 w-80 border-1 text-start border-gray-300 rounded-lg p-4 m-4">
                <img className="m-auto h-40 w-80 rounded-sm" src={props.img} alt="Images" />
                <h1 className="text-2xl text-blue-900 font-bold py-5">{props.title}</h1>
                <button className="absolute bottom-4 cursor-pointer bg-slate-800 py-3 px-8 rounded-sm text-white font-semibold hover:bg-slate-700 hover:duration-700">Continue</button>
            </div>
        </>
    )
}

export default MyCoursesPage;