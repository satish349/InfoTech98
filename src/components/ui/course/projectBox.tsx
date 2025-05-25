import React, { ReactNode } from "react";

interface projectProps {
    pImg:ReactNode,
    pTitle:string,
    pDes:string,
}

const ProjectBox = (props:projectProps) =>{
    return (
        <>
            <div className="flex items-center justify-center flex-wrap gap-8 px-5 pb-20">
                <div className="hover:mask-t-from-90% border-1 h-65 w-90 py-10 px-5 m-auto text-center rounded-sm hover:shadow-xl bg-slate-100 shadow-lg hover:duration-900 hover:scale-105">
                    <p>{props.pImg}</p>
                    <h1 className="text-xl font-semibold text-slate-800 mb-3">{props.pTitle}</h1>
                    <p>{props.pDes}</p>
                </div>
            </div>
        </>
    )
}
export default ProjectBox;