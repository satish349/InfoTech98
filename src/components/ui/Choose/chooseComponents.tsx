import React from "react";

interface Props {
    icons: React.ReactNode;
    title: string;
    des: string;
}

const ChooseCompo = (ChooseProps: Props) => {
    return(
        <>
            <div>
                <div className="border-1 rounded-xl w-80 h-90 text-center px-10 py-15 hover:bg-slate-800 transition hover:duration-700 hover:ease-in-out hover:text-white my-5 shadow-xl">
                    <div className="flex align-center justify-center">
                        <p className="text-4xl rounded-full p-3 h-16 w-16 text-center border-1">{ChooseProps.icons}</p>
                    </div>
                    <h1 className="text-xl font-bold my-5">{ChooseProps.title}</h1>
                    <p>{ChooseProps.des}</p>
                </div>
            </div>
        </>
    )
}

export default ChooseCompo;