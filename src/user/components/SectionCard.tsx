import { Link } from "react-router";

interface Props {
    title: string;
    description: string;
    textButton: string;
    img: string;
    shadow?: boolean;
    url: string;
}

const SectionCard = ({ title, description, textButton, img, shadow, url }: Props) => {
    return (
        <div className={` flex  items-center gap-4  py-5 px-4 bg-[#D9D9D9] rounded-2xl w-full max-w-xs sm:max-w-md sm:gap-6 md:gap-8 md:max-w-lg lg:max-w-xl${shadow && 'shadow-[10px_10px_7px_rgba(0,0,0,0.25)]'}`}>

            <img
                src={img}
                alt="Imagen"
                className="  shrink-0 object-cover rounded-xl bg-black w-30 h-25 sm:w-45 sm:h-35 md:w-50 md:h-40"
            />

            <div className="flex flex-col justify-center">

                <h2 className="text-lg sm:text-2xl md:text-2xl font-anton min-h-[2.5em]">
                    {title}
                </h2>

                <p className="mt-2 font-anybody max-w-md text-xs min-h-[4em] sm:text-sm">
                    {description}
                </p>

                <Link
                    to={url}
                    className="mt-2 inline-block bg-[#3B78B3] text-white text-md py-1 px-5 rounded-md font-semibold hover:scale-105 transition text-center sm:mt-2 sm:text-md sm:py-2 md:py-3 "
                >
                    {textButton}
                </Link>

            </div>
        </div>
    )
}

export default SectionCard