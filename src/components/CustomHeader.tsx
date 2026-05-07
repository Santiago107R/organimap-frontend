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
      <div className="bg-[#1A2B3C] text-white flex items-center justify-between px-5 pt-3 pb-2">
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        <h1 className="text-5xl font-montserrat text-center flex-1">{title}</h1>
        <Icon size={35} />
      </div>

      <nav className="sticky top-0 z-50 py-3 flex justify-center gap-4 bg-[#2C3E50] text-white border-t border-[#1A2B3C] shadow-lg">
        {link.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className="hover:text-blue-200 transition-colors"
          >
            <p className="font-montserrat">{item.name}</p>
          </Link>
        ))}
      </nav>
    </>
  )
}
export default CustomHeader
