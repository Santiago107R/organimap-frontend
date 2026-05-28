interface Props {
    floor: string;
    setFloor: (floor: string) => void;
}

const MapFilters = ({
    floor,
    setFloor,
}: Props) => {

    const active =
        "bg-[#2E6EB3]";

    const inactive =
        "bg-[#4B86C6] hover:scale-105";

    const buttonStyle = ` flex items-center gap-3 px-6 h-[60px] rounded-full text-white text-[28px] font-bold border-2 border-[#2E5C8A] shadow-md transition-all duration-200 `;

    return (
        <>
            <button
                onClick={() => setFloor("pb")}
                className={`
          ${buttonStyle}
          ${floor === "pb" ? active : inactive}`}
            >
                <span>PB</span>
            </button>


            <button
                onClick={() => setFloor("p1")}
                className={`
          ${buttonStyle}

          ${floor === "p1" ? active : inactive}`}
            >
                <span>P1 aula</span>
            </button>


            <button
                onClick={() => setFloor("taller")}
                className={`
          ${buttonStyle}

          ${floor === "taller" ? active : inactive}`}
            >
                <span>Taller</span>
            </button>
        </>
    );
};

export default MapFilters;      