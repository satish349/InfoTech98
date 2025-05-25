import React from "react";
import MyBatchComponents from "./batchComponents";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const MyBatchPage = async() => {
    const session = await getServerSession(authOptions);
    if(!session || !session.user){
        return <div>No session found. Please log in.</div>;
    }

    return(
        <>
            <div className="text-md font-semibold text-slate-900 text-center py-5 bg-slate-100 uppercase">
                Hii {session.user.username || session.user.name}, Welcome to Your Cources!.
            </div>
            <div className="flex justify-center flex-wrap gap-10">
                <MyBatchComponents img="/asset/img4.jpg" title="Alpha Batch"/>
            </div>
        </>
    )
}

export default MyBatchPage;