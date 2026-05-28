import { useState } from "react";
import MapFilters from "./MapFilters";

import pb from "@/assets/maps/pb.jpeg";
import pbIcons from "@/assets/maps/pb-icons.jpeg";

import p1 from "@/assets/maps/p1.jpeg";
import p1Icons from "@/assets/maps/p1-icons.jpeg";

import taller from "@/assets/maps/taller.jpeg";
import tallerIcons from "@/assets/maps/taller-icons.jpeg";

const AulaMap = () => {
    const [floor, setFloor] = useState("pb");
    const [focusMode, setFocusMode] = useState(false);

    const maps = {
        pb: focusMode ? pbIcons : pb,
        p1: focusMode ? p1Icons : p1,
        taller: focusMode ? tallerIcons : taller,
    };

    return (
        <section className="w-full flex flex-col items-center mt-20 ">

            
            <div
                className=" relative bg-[#dddddd] rounded-[45px] w-175 h-117.5 p-8 flex items-center justify-center border border-[#bdbdbd] shadow-md "
            >

                <span className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#1D3048] rounded-tl-4xl"></span>
                <span className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#1D3048] rounded-tr-4xl"></span>
                <span className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#1D3048] rounded-bl-4xl"></span>
                <span className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#1D3048] rounded-br-4xl"></span>

                <button
                    onClick={() => setFocusMode(!focusMode)}
                    className=" absolute top-5 left-5 w-13.25 h-13.25 rounded-full bg-[#1D3048] flex items-center justify-center text-yellow-400 text-4xl shadow-xl hover:scale-105 transition-all duration-200 "
                        
                >
                    
                </button>

                <img
                    src={maps[floor as keyof typeof maps]}
                    alt="Mapa"
                    className="w-140 object-contain"
                />
            </div>


            <div className="flex gap-5 mt-10 mb-20">
                <MapFilters floor={floor} setFloor={setFloor} />
            </div>

        </section>
    );
};

export default AulaMap;