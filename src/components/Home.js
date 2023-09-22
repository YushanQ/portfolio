import React from "react";
import { motion } from "framer-motion";
// import profile from '../assets/profile.jpeg';

export default function Home(){

    return <>
        <div id="home" className="relative w-full h-[36rem]">
            <div className='bg-[url("./assets/background.jpg")] h-[36rem] w-full bg-cover bg-center p-10 
                        blur-sm hover:blur-none'></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 flex flex-col place-items-center">
                <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h2 className="text-7xl text-white font-bold mt-4 mb-4">Yushan Qin</h2>
                </motion.div>
                <h4 className="text-white text-2xl">Computer Sciences & Data Sciences</h4>
            </div>
        </div>
    </>
}