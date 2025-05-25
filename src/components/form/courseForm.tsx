"use client";
// import { insertIntoDBForCourse } from "@/serverAction";
import { useState } from "react";

const CourseForm = () => {
    const [inpVal, setInpVal] = useState({
        title:"",
        description:"",
        category:"",
        thumbnail_Url:"",
        old_price:"",
        new_price:"",

        projectOneLogo:"",
        projectOneTitle:"",
        projectOneDes:"",
        
        projectTwoLogo:"",
        projectTwoTitle:"",
        projectTwoDes:"",
        
        projectThreeLogo:"",
        projectThreeTitle:"",
        projectThreeDes:""
    })

    const handleSubmit = async () => {
    const res = await fetch('/api/courses', {
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

    const printInpValue = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inpVal);
        // setInpVal({
        //     title: "",
        //     description: "",
        //     category: "",
        //     thumbnail_Url: "",
        //     old_price: "",
        //     new_price: "",
        // });
    }
    return(
        <>
            <section className=" p-10 rounded-md">
                <h1 className="text-2xl font-bold text-blue-500 text-center">Course Form</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
                        <label htmlFor="category" className="text-lg font-semibold">Category</label><br />
                        <input
                            required
                            className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                            type="text" 
                            placeholder="Ex : Full Stack web development" 
                            name="category"
                            value={inpVal.category}
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

                    <div className="flex gap-5">
                        <div className="mt-5">
                            <label htmlFor="old_price" className="text-lg font-semibold">Old_price</label><br />
                            <input
                                required
                                className="w-48 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Enter old price..." 
                                name="old_price"
                                value={inpVal.old_price}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="new_price" className="text-lg font-semibold">New_price</label><br />
                            <input
                                required
                                className="w-48 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Enter new price..." 
                                name="new_price"
                                value={inpVal.new_price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <h1 className="text-2xl text-yellow-600 font-semibold my-5">Project Details.</h1>
                        <div className="">
                            <label htmlFor="projectOneLogo" className="text-lg font-semibold">Project One Logo</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Logo" 
                                name="projectOneLogo"
                                value={inpVal.projectOneLogo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="projectOneTitle" className="text-lg font-semibold">Project One Title</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Title..." 
                                name="projectOneTitle"
                                value={inpVal.projectOneTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="my-5">
                            <label htmlFor="projectOneDes" className="text-lg font-semibold">Project One Description</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Enter Description..." 
                                name="projectOneDes"
                                value={inpVal.projectOneDes}
                                onChange={handleChange}
                            />
                        </div>


                        <hr />
                        {/* Project Two  */}
                        <div className="mt-8">
                            <label htmlFor="projectTwoLogo" className="text-lg font-semibold">Project Two Logo</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Logo" 
                                name="projectTwoLogo"
                                value={inpVal.projectTwoLogo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="my-5">
                            <label htmlFor="projectTwoTitle" className="text-lg font-semibold">Project Two Title</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Title..." 
                                name="projectTwoTitle"
                                value={inpVal.projectTwoTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="my-5">
                            <label htmlFor="projectTwoDes" className="text-lg font-semibold">Project Two Description</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Enter Description..." 
                                name="projectTwoDes"
                                value={inpVal.projectTwoDes}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Project Three  */}
                        <hr />
                        <div className="mt-8">
                            <label htmlFor="projectThreeLogo" className="text-lg font-semibold">Project Three Logo</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Logo" 
                                name="projectThreeLogo"
                                value={inpVal.projectThreeLogo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="projectThreeTitle" className="text-lg font-semibold">Project Three Title</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Project Title..." 
                                name="projectThreeTitle"
                                value={inpVal.projectThreeTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="projectThreeDes" className="text-lg font-semibold">Project Three Description</label><br />
                            <input
                                required
                                className="w-100 border-1 rounded-sm py-2 px-5 border border-slate-500/[.5] mt-2" 
                                type="text" 
                                placeholder="Enter Description..." 
                                name="projectThreeDes"
                                value={inpVal.projectThreeDes}
                                onChange={handleChange}
                            />
                        </div>
                        
                    </div>

                    <div className="flex gap-8 justify-center mt-5">
                        <button onClick={()=>setInpVal({
                            title: "",
                            description: "",
                            category: "",
                            thumbnail_Url: "",
                            old_price: "",
                            new_price: "",

                            projectOneLogo:"",
                            projectOneTitle:"",
                            projectOneDes:"",
                            
                            projectTwoLogo:"",
                            projectTwoTitle:"",
                            projectTwoDes:"",
                            
                            projectThreeLogo:"",
                            projectThreeTitle:"",
                            projectThreeDes:""
                        })} className="bg-blue-800 py-2 px-9 font-semibold rounded-md cursor-pointer hover:bg-blue-600 hover:duration-700">Cancel</button>
                        <button onClick={printInpValue} className="bg-blue-800 py-2 px-9 font-semibold rounded-md cursor-pointer hover:bg-blue-600 hover:duration-700">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CourseForm;