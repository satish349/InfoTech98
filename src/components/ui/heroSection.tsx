import React from "react";
import {FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
const HeroSection = () =>{
    return(
        <>
            <div className="py-20 px-70 bg-slate-900 text-white uppercase text-center">
                <h1 className="font-semibold text-xl">India&apos;s Most Loved Community ❤️</h1>
                <div className="flex align-center justify-between gap-30 my-5 pt-3 flex-wrap">
                    <div className="text-center">
                        <div className="flex align-center justify-center mb-1">
                            <FaUsers className="text-3xl mr-5"/>
                            <p className="text-xl">60,000 +</p>
                        </div>
                        <div>Most Learner</div>
                    </div>

                    <div className="text-center">
                        <div className="flex align-center justify-center mb-1">
                            <FaHandHoldingHeart className="text-3xl mr-5"/>
                            <p className="text-xl">60,000 +</p>
                        </div>
                        <div>Monthly Views</div>
                    </div>

                    <div className="text-center">
                        <div className="flex align-center justify-center mb-1">
                            <MdSubscriptions className="text-3xl mr-5"/>
                            <p className="text-xl">10,000 +</p>
                        </div>
                        <div>New Monthly Subscribers</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;