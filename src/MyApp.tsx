
import { UserCircle2 } from 'lucide-react'
import CustomFooter from './user/components/CustomFooter'
import CustomHeader from './user/components/CustomHeader'

const MyApp = () => {
    return (
        <div>
            <CustomHeader title={"Tienda"} link={[{ name: "Horarios", url: '/' }, { name: "Mapa", url: 'mapa' }, { name: "Lista", url: 'lista' },]} logo={'/favicon.svg'} perf={<UserCircle2 className='w-20 h-20 rounded-full object-cover"'/>}/>
            <p className="text-3xl m-4">Hola mundo</p>
            <CustomFooter description="Derechos reservados por Organimap" link={[{ name: "Arturitorodriguezvera@gmail.com", url: "#" }, { name: "ezequielnicolasacosta@gmail.com", url: "#" }]} />
        </div>
    )
}

export default MyApp
