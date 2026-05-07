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
        <div className={`flex items-center gap-8 py-5 px-4 bg-[#D9D9D9] rounded-2xl max-w-lg ${shadow && 'shadow-[10px_10px_7px_rgba(0,0,0,0.25)]'}`}>

            <img
                src={img}
                alt="Imagen"
                className="w-50 h-35 shrink-0   rounded-xl bg-black"
            />

            <div className="flex flex-col justify-center">

                <h2 className="text-2xl">
                    {title}
                </h2>

                <p className="mt-2 font-montserrat max-w-md text-sm">
                    {description}
                </p>

                <Link
                    to={url}
                    className="mt-4 inline-block bg-[#3B78B3] text-white text-lg py-3 px-5 rounded-md font-semibold hover:scale-105 transition text-center"
                >
                    {textButton}
                </Link>

            </div>
        </div>
    )
}

export default SectionCard