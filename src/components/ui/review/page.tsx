import React from "react";
import RevCompPages from "./revCom";

const ReviewPages = () =>{
    return(
        <>
            <div className="py-10 bg-slate-800">
                <h1 className="text-center text-2xl font-semibold mb-10">Reads reviews from our <span className="text-blue-800">Students</span></h1>
                <div className="text-center flex gap-5 flex-wrap px-20 pb-6">
                    <RevCompPages
                        img='/asset/img1.jpg'
                        name='Guddu Kumar'
                        title='Web Development'
                        des='"This platform helped me go from zero to confidently building full-stack web apps."
Guddu shares how the hands-on projects and expert mentorship gave him the confidence to dive deep into modern web development tools like React, Node.js, and more.'
                    />

                    <RevCompPages
                        img='/asset/img2.jpeg'
                        name='Gulshan Kumar'
                        title='Artificial Intelligence'
                        des='"It made AI understandable, exciting, and career-ready."
From neural networks to real-world applications, Gulshan praises the clear curriculum and support that helped him build his first AI models with ease.'
                    />

                    <RevCompPages
                        img='/asset/img3.jpg'
                        name='Satish Kumar'
                        title='Software Developer'
                        des='"Structured, practical, and job-oriented learning."
Satish highlights how the blend of theory and real-world coding practice prepared him not just to learn — but to land his first software development role.'
                    />
                </div>
            </div>
        </>
    )
}
export default ReviewPages;