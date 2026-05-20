import type { state } from "../types/aula.response";

interface Props {
    name: string;
    description?: string;
    capacity: number;
    state: state;

    profesor?: string;
    materia?: string;
    curso?: string;

    onClose?: () => void;
}

const AulaModal = ({ name, capacity, state, profesor, materia, curso, description, onClose }: Props) => {

    const statusStyles = {
        available: {
            bg: "bg-green-300",
            text: "text-green-700"
        },

        busy: {
            bg: "bg-red-300",
            text: "text-red-700"
        },

        maintenance: {
            bg: "bg-gray-300",
            text: "text-gray-700"
        }
    }

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#E7E7E7] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#D9D9D9] px-6 py-4 flex justify-between items-start">

                    <h1 className="text-3xl font-bold font-anton leading-tight">
                        {name}
                    </h1>

                    <button onClick={onClose} className="text-2xl text-gray-500 hover:text-black cursor-pointer">

                        ×

                    </button>

                </div>

                <div className="p-6 flex flex-col gap-6">

                    <div className={`rounded-full py-3 text-center ${statusStyles[state].bg}`}>
                        <p className={`text-3xl font-bold font-anton ${statusStyles[state].text}`} >
                            {state === 'available' ? 'Disponible' : state === 'maintenance' ? 'Mantenimiento' : 'Ocupado'}

                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-2xl">
                        {profesor && (

                            <p>
                                <span className="font-bold"> Profe a cargo:&nbsp; </span>{profesor}
                            </p>
                        )
                        }

                        {materia && (

                            <p>
                                <span className="font-bold"> Materia:&nbsp; </span>{materia}
                            </p>
                        )
                        }

                        {curso && (

                            <p>
                                <span className="font-bold"> Curso:&nbsp; </span>{curso}
                            </p>
                        )
                        }

                        <p>
                            <span className="font-bold"> Capacidad:&nbsp; </span>{capacity}
                        </p>

                    </div>

                    <div>
                        <p className="text-2xl font-bold">
                            Descripción:&nbsp;
                            <span className="font-normal text-gray-700">{description} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AulaModal