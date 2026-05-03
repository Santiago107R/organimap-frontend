import type { link } from "@/user/types/links";

interface Props {
    description:string;
    link?:link[];
}

const CustomFooter = ({ description, link }: Props) => {
  return (
    <footer className="bg-[#1A2B3C] border-t-2 p-5 text-white">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        <p className="text-gray-400 text-sm">
          &copy; {description}
        </p>

        <div className="flex flex-col items-end">

          {link && link.map((item) => (
          <a key={item.name} href={item.url}className="hover:text-blue-200">
            {item.name}</a>))}
        </div>

      </div>

    </footer>
  )
}

export default CustomFooter
