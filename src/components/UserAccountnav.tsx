"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { PiUserCircleFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { FcReadingEbook } from "react-icons/fc";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLoading } from "@/app/providers/loading-provider";


const UserAccountNavPages = () =>{
    const {startLoading} = useLoading()

    const router = useRouter();
    const handleClickForContact = () =>{
        startLoading() // Call the appropriate method from your loading context
        router.push('/contact');
    }

    const handleClickForMybatch = () => {
        startLoading(); 
        router.push('/mybatch');
    }

    const handleClickForProfile = () =>{
        startLoading(); 
        router.push('/myprofile')
    }

    const handleClickForTeam = () =>{
        startLoading(); 
        router.push('/myteam');
    }
    return(
        <>
            {/* <Button className="bg-white text-slate-900 font-bold hover:duration-700 hover:bg-slate-600 hover:text-white cursor-pointer " onClick={()=> signOut({
                redirect:true,
                callbackUrl: `${window.location.origin}/sign-in`
            })} variant='default'>Sign Out</Button> */}

        <section>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className=" h-8 w-8 rounded-full hover:duration-700 hover:text-white hover:bg-gray-600 cursor-pointer bg-white text-slate-900">
                        <PiUserCircleFill/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-5">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <span onClick={handleClickForProfile}>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>
                        <CreditCard />
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleClickForTeam}>
                        <Users />
                        <span>All Team Members</span>
                    </DropdownMenuItem>
                    {/* <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                        <UserPlus />
                        <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                            <Mail />
                            <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                            <MessageSquare />
                            <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                            <PlusCircle />
                            <span>More...</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub> */}
                    {/* <DropdownMenuItem>
                        <Plus />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <FcReadingEbook/>
                        <span onClick={handleClickForMybatch}>My Batch</span>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                    <Github />
                    <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <LifeBuoy />
                    <span onClick={handleClickForContact}>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                    <Cloud />
                    <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() =>
                            signOut({
                                redirect: true,
                                callbackUrl: `${window.location.origin}/sign-in`
                            })
                        }
                    >
                    <LogOut />
                    <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>

            
        </>
        
    )
}

export default UserAccountNavPages