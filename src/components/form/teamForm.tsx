"use client";
// import { insertIntoDBForCourse } from "@/serverAction";
import { useState } from "react";

const TeamForm = () => {
    const [inpVal, setInpVal] = useState({
        full_name:'',
        title:"",
        description:"",
        category:"",
        thumbnail_Url:"",
        linkedIn:"",
        github:"",
        instagram:'',
        twitter:''
    })

    const handleSubmit = async () => {
    const res = await fetch('/api/myteam', {
      method: 'POST',
      body: JSON.stringify(inpVal),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
  };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInpVal(
        (prev) => ({...prev, [name]:value})
        );
    }

    return(
        <>
            <section className=" p-10 rounded-md">
                <h1 className="text-2xl font-bold text-blue-500 text-center">Course Form</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div className="mt-5">
                        <label htmlFor="full_name" className="text-lg font-semibold">Full Name</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="Ex : Satish Kumar" 
                            name="full_name"
                            value={inpVal.full_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="title" className="text-lg font-semibold">Title</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="Ex : Alpha Batch.." 
                            name="title"
                            value={inpVal.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="description" className="text-lg font-semibold">Description</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="Enter course descriptioncription..." 
                            name="description"
                            value={inpVal.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="thumbnail_Url" className="text-lg font-semibold">Thumbnail Url</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="https://ex.png" 
                            name="thumbnail_Url"
                            value={inpVal.thumbnail_Url}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="linkedIn" className="text-lg font-semibold">LinkedIn Url</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="https://linkedin.com" 
                            name="linkedIn"
                            value={inpVal.linkedIn}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="twitter" className="text-lg font-semibold">Twitter Url</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="https://twitter.com" 
                            name="twitter"
                            value={inpVal.twitter}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="instagram" className="text-lg font-semibold">Instagram Url</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="https://instagram.com" 
                            name="instagram"
                            value={inpVal.instagram}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="github" className="text-lg font-semibold">Github Url</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="https://github.com" 
                            name="github"
                            value={inpVal.github}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-8 justify-center mt-5">
                        <button onClick={()=>setInpVal({
                            full_name:'',
                            title:"",
                            description:"",
                            category:"",
                            thumbnail_Url:"",
                            linkedIn:"",
                            github:"",
                            instagram:'',
                            twitter:''
                        })} className="bg-blue-800 py-2 px-9 font-semibold rounded-md cursor-pointer hover:bg-blue-600 hover:duration-700">Cancel</button>
                        <button className="bg-blue-800 py-2 px-9 font-semibold rounded-md cursor-pointer hover:bg-blue-600 hover:duration-700">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TeamForm;