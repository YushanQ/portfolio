import React from "react";

export default function Project(props) {
    return (  
        <div className="flex flex-col items-start bg-white mb-16 h-auto border border-gray-200 rounded-lg shadow md:flex-row hover:bg-shadow">
            <div className="xs:w-[200px] xs:h-[200px] sm:w-[350px] sm:h-[350px] w-[100px] h-[100px] m-4 items-center">
                <img className="object-cover w-full h-full" src={props.img} alt="project img"/>
            </div>

            <div className="flex flex-col p-4 leading-normal">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                <p className="my-3 text-xl text-gray-700">{props.desc}</p>
                <p className="my-3 text-l text-gray-700">Skills: {props.skills}</p>
            </div>
        </div>
    );
}