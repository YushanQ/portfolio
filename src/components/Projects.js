import React from "react";
import Project from "./Project";
import decoImg from "../assets/earth.png";
import { projs } from "../Data";

export default function Projects() {
    return (
        <div className="section flex flex-col items-center relative" id="projects">
            <h3 className="text-[1rem] sm:text-[2rem] font-bold mb-8">Projects</h3>
            <div
                className="bg-cover absolute top-[-30px] right-[-40px]"
                style={{ backgroundImage: `url(${decoImg})`, width: '250px', height: '250px' }}
            />
            <div className="container mx-auto h-auto bg-lightblue px-8 pt-16">
                {
                    projs.map((p) => {
                        return (
                            <Project key={p.id} {...p}/>
                        )
                    })
                }
            </div>
        </div>
    );
}