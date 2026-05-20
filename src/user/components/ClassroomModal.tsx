interface Props {
    title: string;
    capacidad: string;

    disp: "Disponible" | "Ocupada" | "Mantenimiento";

    profesor?: string;
    materia?: string;
    descripcion?: string;

    onClose: () => void;
}

const ClassroomModal = ({title, capacidad, disp, profesor, materia, descripcion, onClose }: Props) => {

    const statusStyles = {
        Disponible: {
            bg: "bg-green-300",
            text: "text-green-700"
        },

        Ocupada: {
            bg: "bg-red-300",
            text: "text-red-700"
        },

        Mantenimiento: {
            bg: "bg-gray-300",
            text: "text-gray-700"
        }
    }

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#E7E7E7] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#D9D9D9] px-6 py-4 flex justify-between items-start">

                    <h1 className="text-3xl font-bold font-anton leading-tight">
                        {title}
                    </h1>

                    <button onClick={onClose} className="text-2xl text-gray-500 hover:text-black cursor-pointer">

                        ×

                    </button>

                </div>

                <div className="p-6 flex flex-col gap-6">

                    <div className={`rounded-full py-3 text-center ${statusStyles[disp].bg}`}>
                        <p className={`text-3xl font-bold font-anton ${statusStyles[disp].text}`} >
                            Estado: {disp}
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-2xl">
                        <p>
                            <span className="font-bold"> Profe a cargo: </span>
                                {" "}{profesor}
                        </p>

                        <p>
                            <span className="font-bold"> Materia: </span>
                            {" "}{materia}
                        </p>

                        <p>
                            <span className="font-bold"> Capacidad: </span>
                            {" "} {capacidad}
                        </p>

                    </div>

                    <div>
                        <p className="text-2xl font-bold"> 
                            Descripción: 
                            <span className="font-normal text-gray-700"> {" "} {descripcion} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassroomModal