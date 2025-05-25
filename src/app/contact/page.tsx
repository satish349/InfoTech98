"use client"
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { useLoading } from "../providers/loading-provider";


const ContactPage = () =>{
    const {startLoading} = useLoading()
    const {stopLoading} = useLoading();
    const [status, setStatus] = useState('');
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.currentTarget);
        startLoading();
        const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
        });
        stopLoading();

        const data = await res.json();

        if (data.Success) {
            setStatus("Successfully sent your email.");
            } else {
            setStatus("Failed to send email");
            }
    };
    setTimeout(() => setStatus(""), 5000);


    return(
        <>
            <div className="h-150 w-250 mt-10 border-1 rounded-lg m-auto flex">
                <div className="w-125 h-full bg-[url(/asset/img5.jpg)] bg-cover rounded-l-lg">
                    <h1 className="text-3xl font-bold text-center text-slate-200 mt-20">
                        Welcome to my query box.
                    </h1>
                    <h3 className="text-xl font-semibold text-center text-yellow-600 mt-5">
                        I&apos;m exited to know your query
                    </h3>
                    <h5 className="text-xl font-semibold text-center text-yellow-400 mt-5">
                        Please note your query
                    </h5>
                </div>
                <div className="w-125 pt-20 pl-10 bg-gray-200 rounded-r-lg">
                    <h1 className="text-3xl font-semibold text-sky-900 text-shadow-lg/15">Contact Us</h1>
                    <form onSubmit={handleSubmit} method="POST" action="/api/send-email" className="mt-10">
                        <div className="mb-5">
                            <TextField name="name" required className="w-100 border-white" id="outlined-basic" label="Full Name" variant="outlined" placeholder="Enter Your Full Name..."/>
                        </div>

                        <div className="mb-5">
                            <TextField name="email" type="email" required className="w-100" id="outlined-basic" label="Email Id" variant="outlined" placeholder="Enter Email Id..."/>
                        </div>

                        <div className="mb-5">
                            <TextField name="mobile" required className="w-100" id="outlined-basic" label="Mobile Number" variant="outlined" placeholder="Enter Your Mobile Number..."/>
                        </div>

                        <div className="mb-5">
                        <TextField
                            name="query" 
                            required
                            className="w-100"
                            id="outlined-multiline-flexible"
                            label="Query"
                            multiline
                            maxRows={5}
                            placeholder="Enter Your Query....."
                        />
                        </div>

                        <div className="flex gap-5">
                            <button type="reset" className="bg-slate-300 border-1 py-2 px-5 hover:bg-slate-700 font-semibold hover:text-slate-300 hover:duration-700 rounded-sm cursor-pointer">
                                Clear
                            </button>

                            <button type="submit"
  disabled={status === "Sending..."} className="bg-slate-300 border-1 py-2 px-5 hover:bg-slate-700 font-semibold hover:text-slate-300 hover:duration-700 rounded-sm cursor-pointer">
                                {status === "Sending..." ? "Sending..." : "Submit"}
                            </button>
                        </div>
                        <div className={`text-center mt-5 py-2 px-5 rounded-sm w-100 text-white ${
  status.includes('Failed') ? 'bg-red-600' : status.includes('Sending') ? 'bg-yellow-500' : 'bg-green-600'
}`}>
  <p>{status}</p>
</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage;