import ClassroomCard from "@/user/components/ClassroomCard"
import ClassroomFilters from "@/user/components/ClassroomFilters"


const classrooms = [
  {
    id: 1,
    title: "Sala grande",
    img: "/favicon.svg",
    capacidad: "40 estudiantes",
    disp: "Disponible" as const,
    profesor: "Juan",
    materia: "Matemática",
    descripcion: "Sala principal"
  },

  {
    id: 2,
    title: "Laboratorio de informática 1",
    img: "/favicon.svg",
    capacidad: "20 estudiantes",
    disp: "Mantenimiento" as const,
    profesor: "Carlos",
    materia: "Programación",
    descripcion: "No funcionan algunas PC"
  },

  {
    id: 3,
    title: "Aula 5",
    img: "/favicon.svg",
    capacidad: "20 estudiantes",
    disp: "Ocupada" as const,
    profesor: "Sossa",
    materia: "Programación",
    descripcion: "No andan 3 PC's"
  }
]

const ListPage = () => {
  return (
    <div className="p-10 flex flex-col gap-6">
      <div>
        <ClassroomFilters/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">

        {classrooms.map((room) => (
          <ClassroomCard key={room.id} title={room.title} img={room.img} capacidad={room.capacidad} disp={room.disp} profesor={room.profesor} materia={room.materia} descripcion={room.descripcion} shadow />
        ))}
        
      </div>
    </div>
  )
}

export default ListPage