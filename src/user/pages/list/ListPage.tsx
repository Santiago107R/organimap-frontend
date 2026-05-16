import ClassroomCard from "@/user/components/ClassroomCard"

const ListPage = () => {
  return (
    <div className="p-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
                <ClassroomCard title="Sala grande" img={'/favicon.svg'} capacidad="40 estudiantes" disp="Disponible" shadow />
                <ClassroomCard title="Laboratorio de informatica 1" img={'/favicon.svg'} capacidad="20 estudiantes" disp="Deshabilitada" shadow />
                <ClassroomCard title="Laboratorio de informatica 2" img={'/favicon.svg'} capacidad="32 estudiantes" disp="Ocupada" shadow />
                <ClassroomCard title="Sala chica" img={'/favicon.svg'} capacidad="20 estudiantes" disp="Disponible" shadow />
                <ClassroomCard title="Laboratorio 1" img={'/favicon.svg'} capacidad="25 estudiantes" disp="Deshabilitada" shadow />
                <ClassroomCard title="Laboratorio 2" img={'/favicon.svg'} capacidad="15 estudiantes" disp="Ocupada" shadow />
                <ClassroomCard title="Taller" img={'/favicon.svg'} capacidad="31 estudiantes" disp="Disponible" shadow />
                <ClassroomCard title="Biblioteca" img={'/favicon.svg'} capacidad="28 estudiantes" disp="Deshabilitada" shadow />
                <ClassroomCard title="Aula 5" img={'/favicon.svg'} capacidad="20 estudiantes" disp="Ocupada" shadow />
                
            </div>
        </div>
  )
}

export default ListPage
