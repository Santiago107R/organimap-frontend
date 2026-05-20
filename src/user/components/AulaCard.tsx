import { useState } from "react";
import AulaModal from "./AulaModal";
import type { state } from "../types/aula.response";


interface Props {
    shadow?: boolean;
    name: string;
    img?: string;
    capacidad: number;

    state: state;

    profesor?: string;
    materia?: string;
    description?: string;
}

const AulaCard = ({ shadow, name, img, capacidad, state, profesor, materia, description }: Props) => {

    const [open, setOpen] = useState(false)

    const statusColors = {
        available: "text-green-500",
        busy: "text-red-500",
        maintenance: "text-gray-500",
    }

    return (
        <>

            <div
                onClick={() => setOpen(true)}
                className={` flex flex-col py-8 px-3 bg-[#D9D9D9] rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl cursor-pointer transition hover:scale-105 ${shadow && 'shadow-[10px_10px_7px_rgba(0,0,0,0.25)]'} `}
            >

                <div className="flex gap-6 sm:gap-8 md:gap-4 lg:gap-10 ml-8">

                    <img
                        src={img}
                        alt="Imagen"
                        className="shrink-0 object-cover mt-1 rounded-sm bg-black w-19 h-15 sm:w-22 sm:h-17 md:w-22 md:h-16"
                    />

                    <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-anton min-h-[2.5em]">
                        {name}
                    </h2>

                </div>

                <div className="flex flex-col font-anybody ml-15 mt-4">
                    <ul className="text-sm sm:text-md md:text-lg">
                        <li>
                            <span className="font-bold">
                                Capacidad:
                            </span>

                            {" "}{capacidad}
                        </li>

                        <li>
                            <p className="font-bold">
                                <span>
                                    Estado:
                                </span>

                                {" "}

                                <span className={statusColors[state]}>
                                    {state}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* {
                open && (
                    <AulaModal name={name} capacidad={capacidad} state={state} profesor={profesor} materia={materia} description={description} onClose={() => setOpen(false)} />
                )
            } */}
        </>
    )
}

export default AulaCard