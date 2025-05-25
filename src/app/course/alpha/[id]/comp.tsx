import { FaUsers, FaVideo } from "react-icons/fa6";
import { GrDocumentUser } from "react-icons/gr";
import { AiOutlineDoubleRight } from "react-icons/ai";
import CurrPages from "@/components/ui/course/curriculum";
import ProjectBox from "@/components/ui/course/projectBox";
import { number } from "zod";
import { getDetail } from "./data";
import { FaAirbnb, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiZerodha } from "react-icons/si";
import { AiOutlineWechat } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { authOptions } from "@/lib/auth";
import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";

interface AlphaProps {
    id: number
}

const Alpha: React.FC<AlphaProps> = async ({id}) => {
    // const data = await getDetail(id)
    const data = await getDetail(id);
    return(
        <>
            {   !('Status' in data) &&
                data.map((item, index)=>(
                    <section key={index}>
                        <div className="flex items-center justify-evenly justify-center py-20 flex-wrap">
                            <div className="w-120">
                                <h1 className="text-3xl text-sky-600 font-semibold my-5">
                                    {item.title} : 
                                    <span className="text-white text-2xl"> Complete {item.category}!</span>
                                </h1>
                                <div className="text-white">
                                    <div className="flex text-xl mb-3">
                                        <FaVideo className="text-2xl mr-5"/>
                                        <span className="text-slate-100">
                                            Live mentorship session
                                        </span>
                                    </div>
                                    <div className="flex text-xl mb-3">
                                        <FaUsers className="text-2xl mr-5"/>
                                        <span className="text-slate-100">                 
                                            Individual Doubt Solving TAs & Community
                                        </span>
                                    </div>
                                    <div className="flex text-xl mb-3">
                                        <GrDocumentUser className="text-2xl mr-5"/>
                                        <span className="text-slate-100">
                                            Access to Multiple Industry Grade Projects 
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button className="flex items-center text-lg bg-blue-900 py-2 px-7 text-white font-semibold rounded-sm hover:bg-blue-700 hover:duration-700 cursor-pointer">
                                        Enroll Now
                                        <AiOutlineDoubleRight className="text-xl font-bold ml-2"/>
                                    </button>
                                </div>
                            </div>
                            <div className="w-90 h-90 p-5 border-dotted border-4 rounded-full">
                                <img className="w-90 h-80 rounded-full" src="/asset/img2.jpg" alt="Images" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h1 className="text-center text-3xl py-5 font-semibold my-5 text-white ">Know Your <span className="text-sky-600">Curriculum</span></h1>
                            <CurrPages/>
                        </div>
                        <hr />
                        <div>
                            <h1 className="text-center text-white text-3xl py-5 font-semibold my-5 ">
                                Build Industry Grade 
                                <span className="text-sky-600"> Projects</span></h1>
                            <div className="flex items-center justify-center flex-wrap gap-8 px-5 pb-20">
                                <ProjectBox 
                                    pImg={<FaAirbnb className="m-auto text-6xl bg-slate-600 rounded-full p-2 text-white mb-5"/>}
                                    pTitle={item.projectOneTitle}
                                    pDes={item.projectOneDes}
                                />

                                <ProjectBox
                                    pImg={<SiZerodha className="m-auto text-6xl bg-slate-600 rounded-full p-2 text-white mb-5"/>}
                                    pTitle={item.projectTwoTitle}
                                    pDes={item.projectTwoDes}
                                />

                                <ProjectBox
                                    pImg={<AiOutlineWechat className="m-auto text-6xl bg-slate-600 rounded-full p-2 text-white mb-5"/>}
                                    pTitle={item.projectThreeTitle}
                                    pDes={item.projectThreeDes}
                                />
                            </div>
                        </div>
                        <hr />
                    </section>
                ))
            }
        </>
    )
}
export default Alpha;