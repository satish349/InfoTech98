
import React from "react";

interface aboutProps{
    icons:React.ReactNode,
    title:string,
    des:string,
}

const BoxComponents = (props:aboutProps) => {
    return(
        <>
            <div className=" hover:bg-slate-800 hover:text-white hover:duration-700 hover:shadow-5xl text-center h-70 w-55 border-1 rounded-sm bg-slate-100 px-2 py-7 shadow-xl">
                <div className="flex justify-center mb-4">
                    <p className="bg-slate-900 text-white text-4xl rounded-full p-3 text-4xl text-center border-1">
                        {props.icons}
                    </p>
                    </div>
                <h4 className="font-bold mb-1">{props.title}</h4>
                <p className="">{props.des}</p>
            </div>
        </>
    )
}

export default BoxComponents;