import React from "react";
import AskComponents from "./askComponents";

const DoubtsPage = () =>{
    return(
        <>
            <h1 className="pt-10 text-xl text-slate-100 font-semibold text-center">Generals Doubts</h1>
            <div className="w-250 m-auto py-10">
                <AskComponents 
                    title="Q: Do I need to install anything to use the platform?" 
                    contant="A: No installation required. Everything runs in the browser. Just sign up and start learning or collaborating instantly."
                />
                <AskComponents 
                    title="Q: Is my data secure?" 
                    contant="A: Absolutely. We use JWT-based authentication and follow best practices in security and encryption. Your data stays safe and private."
                />
                <AskComponents 
                    title="Q: Is it beginner-friendly?" 
                    contant="A: 100%. Whether you’re just starting or already experienced, our intuitive design and guidance tools ensure a smooth experience."
                />
                <AskComponents 
                    title="Q: What should I do if I face a bug or issue?" 
                    contant="A: You can use our contact form or reach out to our support team directly. We’re quick to respond and happy to help."
                />
                <AskComponents 
                    title="Q: Is there a way to collaborate with team members?" 
                    contant="A: Yes! We offer real-time team collaboration features — including group discussion, shared boards, and file exchange."
                />
                <AskComponents 
                    title="Q: Are the courses updated regularly?" 
                    contant="A: Definitely. We continuously update content to reflect industry trends, new tools, and evolving best practices."
                />
                <AskComponents 
                    title="Q: Can I access the platform with slow internet?" 
                    contant="A: Yes. We've optimized our platform for performance and minimized loading delays, even on lower bandwidth connections."
                />
                <AskComponents 
                    title="Q: Can I access the platform with slow internet?" 
                    contant="A: Yes. We've optimized our platform for performance and minimized loading delays, even on lower bandwidth connections."
                />
                <AskComponents 
                    title="Q: What courses are available on this platform?" 
                    contant="A: We currently offer Web Development, Artificial Intelligence, and Software Development courses. More are added regularly to match industry demand."
                />
                <AskComponents 
                    title="Q: Do I get a certificate after completing a course?" 
                    contant="A: Yes! Every course includes a completion certificate that you can download and showcase on your portfolio or LinkedIn profile."
                />
                <AskComponents 
                    title="Q: Can I access my courses after completion?" 
                    contant="A: Absolutely. Once you enroll, course access remains active for life—even after completion."
                />
                <AskComponents 
                    title="Q: How do I join a batch or team for learning?" 
                    contant="A: You can join a batch through the “My Batch” section. Teams are assigned or self-created in the “My Team” panel."
                />
                <AskComponents 
                    title="Q: Are there any live sessions or just recorded videos?" 
                    contant="A: We provide both! Core modules are recorded, but you also get access to scheduled live sessions for doubt-clearing and project walkthroughs."
                />
                <AskComponents 
                    title="Q: Is prior coding experience required?" 
                    contant="A: Not at all. Our Web Development and AI tracks start from the basics, and no prior coding experience is necessary.

"
                />
                <AskComponents 
                    title="Q: Will I be building real projects during the course?" 
                    contant="A: Definitely! Every course includes hands-on projects that you can add to your portfolio to showcase your skills.

"
                />

                <AskComponents 
                    title="Q: If you have any doubt still now?" 
                    contant="A: You can go to the support section or Enquire section and send the doubt.

"
                />
            </div>
        </>
    )
}
export default DoubtsPage;