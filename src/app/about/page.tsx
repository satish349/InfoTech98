import React from "react";
import BoxComponents from "./boxCom";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FaInternetExplorer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const AboutPages = () =>{
    return(
        <>
            <section className="flex justify-center mt-3">
                <div>
                    <div className="p-10 pb-30 flex items-center m-auto gap-40 shadow-xl bg-slate-600 rounded-lg">
                        <div className=" flex items-center justify-center w-90 h-90 border-3 border-dotted rounded-full">
                            <img className="rounded-full h-80 w-80" src="/asset/img5.jpg" alt="Images." />
                        </div>
                        
                        <div className="w-130">
                            <h1 className="text-3xl text-yellow-500 text-shadow-lg font-bold mb-5">About Us</h1>
                            <p className="pr-20 text-justify text-white">
                                At Infotech98, we believe that quality education should be accessible, practical, and career-focused. Our mission is to bridge the gap between traditional learning and real-world skills by offering courses designed by industry experts, enhanced with hands-on projects and continuous mentorship.
                            </p>
                        </div>
                    </div>
                    <div className="-mt-20 px-20 z-100 flex gap-10 m-auto flex-wrap">
                        <BoxComponents 
                            icons={<LiaGraduationCapSolid/>} 
                            title="Skilled Instructors"
                            des="Learn from industry professionals with years of experience in web development, AI, data science, and more."
                        />

                        <BoxComponents 
                            icons={<FaInternetExplorer/>} 
                            title="Online Learning"
                            des="Flexible, self-paced modules let you learn anytime, anywhere — without compromising on quality."
                        />

                        <BoxComponents 
                            icons={<FaHome/>} 
                            title="Home Projects"
                            des="Apply your knowledge through guided projects that simulate real-world challenges."
                        />

                        <BoxComponents 
                            icons={<FaBookOpenReader/>} 
                            title="Book Library"
                            des="Access a digital repository of curated books, tutorials, and research materials to support your learning journey."
                        />
                    </div>
                </div>
            </section>
            <hr className="my-20"/>
        </>
    )
}
export default AboutPages;