
interface LinkItem {
  name: string
  url: string
}

interface Props {
  title: string
  link: LinkItem[]
  perf: React.ReactNode
  logo: string
}

const CustomHeader = ({ title, link, perf, logo }: Props) => {
  return (
    <header className="bg-[#1A2B3C] text-white px-4 py-3">

      
      <div className="flex items-center justify-between">

        
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain"
        />

        
        <h1 className="text-5xl text-center flex-1">
          {title}
        </h1>

        
        {perf}
         

      </div>

      
      <nav className="mt-3 pt-3 border-t border-gray-700 flex justify-center gap-4">
        {link.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="hover:text-blue-200"
          >
            {item.name}
          </a>
        ))}
      </nav>

    </header>
  )
}

export default CustomHeader
