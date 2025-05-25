import React from "react";
import ChooseCompo from "./chooseComponents";
import { FcCollaboration } from "react-icons/fc";
import { SiSimplenote } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";

const ChoosePages = () => {
    return(
        <>
            <div>
                <h1 className="text-2xl font-bold text-center pt-10">Why choose our platform?</h1>
                <div className="flex justify-center align-center justify-evenly flex-wrap px-30 py-10">
                        <ChooseCompo title="Team Collaboration" icons={<FcCollaboration/>} des={"“Together is better.” Our platform fosters seamless communication and project synergy, ensuring no idea gets left behind. "}/>
<ChooseCompo title="User Friendly" icons={<FaUserFriends/>} des={"“Technology should serve you, not confuse you.” We prioritize clean design and intuitive interfaces. Whether you're a beginner or a pro, you’ll feel right at home from your first click."}/>
                        <ChooseCompo title="Simple to use" icons={<SiSimplenote/>} des={"“Simplicity is the ultimate sophistication.” From setup to daily use, every interaction is streamlined to save you time. No learning curve. Just instant productivity. "}/>
                </div>
            </div>
        </>
    )
}

export default ChoosePages;