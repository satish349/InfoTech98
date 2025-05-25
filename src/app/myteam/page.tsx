import TeamFormModal from "@/components/modal/teamFormModal";
import TeamComp from "@/components/ui/myteam/teamCom";
import React from "react";
import GetDataFromTeam from "./data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";



const AllMyTeam = async() => {
    const data = await GetDataFromTeam();
    // console.log(data);
    const courseArray = Array.isArray(data) ? data : [];

    const session = await getServerSession(authOptions);
    console.log(session);
    return(
        <>
            <section>
                {
                    courseArray.map((item, index)=>(
                        <div key={index} className="flex justify-center my-10 flex-wrap" >
                            <TeamComp
                                full_name={item.full_name}
                                title={item.title}
                                description={item.description}
                                thumbnail_Url={item.thumbnail_Url}
                                linkedIn={item.linkedIn}
                                github={item.github}
                                instagram={item.instagram}
                                twitter={item.twitter}
                            />
                        </div>
                    ))
                }
                {session && session.user && session.user.role === "ADMIN" && (     
                    <div>
                        <TeamFormModal/>
                    </div>
                )}
            </section>
        </>
    )
}
export default AllMyTeam;