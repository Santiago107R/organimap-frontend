interface Props {
    placeholder?: string;
}

const AulaFilters = ({ placeholder }: Props) => {

    return (

        <div className="flex flex-col lg:flex-row gap-4 mb-10">

            <input
                type="text"

                placeholder={placeholder}

                className=" bg-[#D9D9D9] px-5 py-3 rounded-2xl outline-none w-full text-lg "
            />

            <select
                className=" bg-[#D9D9D9] px-5 py-3 rounded-2xl outline-none text-lg min-w-250px cursor-pointer "
            >

                <option>
                    Todas las aulas
                </option>

                <option>
                    Disponibles
                </option>

                <option>
                    Ocupadas
                </option>

                <option>
                    Mantenimiento
                </option>

            </select>

        </div>

    )
}

export default AulaFilters