import React from "react";
import profile from '../assets/profile.jpeg';
import resume from '../assets/resume.pdf';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


export default function About() {
    return (
        <div className="section flex flex-col items-center" id="about">
            <h3 className="text-[1rem] sm:text-[2rem] font-bold mb-8">About Me</h3>
            <div className="grid md:grid-cols-2 gap-2 place-items-center">
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[10px] border-solid border-ghostWhite">
                    <img src={profile} alt="personal profile" className="w-full h-full object-cover" />
                </div>
                
                <div className="mt-4 md:mt-0">
                    <p className="text-[1rem] opacity-80 leading-relaxed">
                        Hi! It is Yushan Qin here. I am currently an MSCS student in 
                        <a className="text-badgerRed" href="https://www.cs.wisc.edu/"> UW-Madison</a>.
                        Having interests in accelerating computing of scalable data, I am taking courses in Big Data Systems (COMP 544), HPC (COMP 759), and Cloud-native DB (COMP 839). I am seeking 24 summer SDE internship opportunities. Please reach out to me if you have any suggestions.
                    </p>
                    <p className="text-[1rem] mt-4 opacity-80 leading-relaxed">
                        Beyond my academic pursuit, I like hiking & exploring the beauty of nature. Read my Instagram about my adventure story in Zion, Yellowstone, Yosemite NP🏃🏻‍♀️ (and more!). I am a long-time fan of Coldplay and astronomy🪐 (well, could you point out the connection between them?). And I am learning español right now.
                    </p>
                    
                    <div className="mt-4">
                        <a href={resume} className="text-blue  text-[1rem]">Resume</a>
                    </div>
                    
                    <div className="container mx-auto py-4 gap-5 items-center justify-between">
                        <div>
                            <a href="https://www.instagram.com/airyushan/" className="mr-3 text-blue inline-flex">
                                <AiOutlineInstagram size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/yushan-qin" className="mr-3 text-blue inline-flex">
                                <AiOutlineLinkedin size={32} />
                            </a>
                            <a href="mailto:qqinys@gmail.com" className="text-blue inline-flex">
                                <AiOutlineMail size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}