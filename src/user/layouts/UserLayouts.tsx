import { Outlet } from "react-router"
import CustomFooter from "../components/CustomFooter"
import CustomHeader from "../components/CustomHeader"
import { UserCircle2 } from "lucide-react"


const UserLayouts = () => {
  return (
    <>
      <CustomHeader title={"Tienda"} link={[{ name: "Horarios", url: '/' }, { name: "Mapa", url: 'mapa' }, { name: "Lista", url: 'lista' },]} logo={'/favicon.svg'} perf={<UserCircle2 className='w-20 h-20 rounded-full object-cover"' />} />
        <Outlet />
      <CustomFooter description="Derechos reservados por Organimap" link={[{ name: "Arturitorodriguezvera@gmail.com", url: "#" }, { name: "ezequielnicolasacosta@gmail.com", url: "#" }]} />
    </>
  )
}

export default UserLayouts
