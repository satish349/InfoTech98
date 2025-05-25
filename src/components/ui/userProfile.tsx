
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


const UserProfilePages = async () => {
    const session = await getServerSession(authOptions);
    if(!session || !session.user){
        return <div>No session found. Please log in.</div>;
    }
    
    if(session?.user.role === 'USER'){
        console.log("USER");
    } else {
        console.log("NOT");
    }
console.log("Session:", session?.user); 
    return(
        <>
            <section className="bg-gray-100 rounded-md p-10 mt-5">
                <div>
                    <img className="h-20 w-20 flex m-auto rounded-full border-1 p-1 border-blue-700" src={session.user.image || "/asset/avtar.avif"} alt="user Image" />
                    <button className="text-md font-bold py-2 px-8 my-6 cursor-pointer rounded-md text-gray-100 flex m-auto bg-slate-700 hover:bg-gray-300 hover:text-slate-800 hover:duration-700"></button>
                    <div className="mt-5">
                        <label className="text-xl font-bold text-sky-700" htmlFor="full_name">Full Name</label>
                        <p className="border-1 border-blue-200 py-2 px-5 w-80 rounded-md mt-2">{session.user.username || session.user.name}</p>
                    </div>
                    <div className="mt-5">
                        <label className="text-xl font-bold text-sky-700" htmlFor="email">Email Id</label>
                        <p className="border-1 border-blue-200 py-2 px-5 w-80 rounded-md mt-2">{session.user.email}</p>
                    </div>
                    <div className="mt-5">
                        <label className="text-xl font-bold text-sky-700" htmlFor="password">Password</label>
                        <p className="border-1 border-blue-200 py-2 px-5 w-80 rounded-md mt-2">*****</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfilePages;