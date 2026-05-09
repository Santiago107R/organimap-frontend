import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"

interface LinkItemB {
  name: string
  url: string
}

interface Props {
  title: string
  link: LinkItemB[]
  icon: LucideIcon
  logo: string
}

const CustomHeader = ({ title, link, icon: Icon, logo }: Props) => {
  return (
    <>
      <div className="bg-[#1A2B3C] text-white flex items-center justify-between  py-[clamp(1vw,3vw,1rem)]">
        <img src={logo} alt="logo" className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 lg:w-20 lg:h-20 object-contain ml-8" />
        <h1 className="text-3xl sm:text-4xl md:text-1vw lg:text-5xl font-antón  text-center flex-1 ">{title}</h1>
        <Icon className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 mr-8" />
      </div>

      <nav className="sticky top-0 z-50 flex justify-center gap-4 bg-[#2C3E50] text-white border-t border-[#1A2B3C] shadow-lg py-[clamp(0.8rem,3vw,1.1rem)]">
        {link.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className="hover:text-blue-200 transition-colors "
          >
            <p className="font-montserrat text-lg sm:text-2xl md:text-2xl lg:text-27px">{item.name} </p>
          </Link>
        ))}
      </nav>
    </>
  )
}
export default CustomHeader
