"use client";

import React from "react";
import { useRouter } from "next/navigation";
import UserAccountNavPages from "../UserAccountnav";
import { useLoading } from "@/app/providers/loading-provider";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

const NavComponents = () => {
    const router = useRouter();
    const { startLoading } = useLoading();
    const { data: session } = useSession();

    const navItems = [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "About", url: "/about" },
        { id: 3, title: "Course", url: "/course" },
    ];

    const handleRouteClick = (url: string) => {
        startLoading();
        router.push(url);
    };

    return (
        <div className="flex px-30 fixed z-1000 justify-between items-center h-15 w-full bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 text-white">
            <div>
                <button className="cursor-pointer" onClick={() => handleRouteClick("/")}>
                    <img className="h-10 w-10 bg-gray-100 rounded-full" src="/asset/Logo.png" alt="" />
                </button>
            </div>

            <div className="flex gap-10 text-lg font-semibold text-slate-200">
                {navItems.map((navItem) => (
                    <button
                        key={navItem.id}
                        onClick={() => handleRouteClick(navItem.url)}
                        className="hover:text-slate-800 hover:duration-700 cursor-pointer"
                    >
                        {navItem.title}
                    </button>
                ))}
            </div>

            <div>
                {session?.user ? (
                    <UserAccountNavPages />
                ) : (
                    <Button
                        className="bg-white text-slate-900 font-bold hover:duration-700 hover:bg-slate-600 hover:text-white cursor-pointer"
                        onClick={() => handleRouteClick("/sign-in")}
                    >
                        Sign in
                    </Button>
                )}
            </div>
        </div>
    );
};

export default NavComponents;
