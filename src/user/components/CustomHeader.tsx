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
    <header className="bg-[#1A2B3C] text-white ">

      
      <div className="flex items-center justify-between px-5 pt-3">

        
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain"
        />

        
        <h1 className="text-5xl text-center flex-1">
          {title}
        </h1>

        
        <Icon size={35}/>
         

      </div>

      
      <nav className="mt-3 py-3 border-t border-[#1A2B3C] flex justify-center gap-4 bg-[#2C3E50]">
        {link.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className="hover:text-blue-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </header>
  )
}

export default CustomHeader
