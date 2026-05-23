import AulaFilters from "@/user/components/AulaFilters";
import AulaGrid from '../../components/AulaGrid';
import useAulaSocket from '@/hooks/useAulaSocket';
import type { Aula } from "@/user/types/aula.response";
import AulaModal from "@/user/components/AulaModal";
import { useState } from "react";
import { Search } from "lucide-react";

const ListPage = () => {
  const { aulas } = useAulaSocket();

  const [selectedAulaName, setSelectedAulaName] = useState<string | null>(null);

  const [search, setSearch] = useState("")

  const [selectedState, setSelectedState] = useState<string | null>(null)

  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null)

  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const currentAula = aulas?.find(aula => aula.name === selectedAulaName);

  const handleModal = ({ name }: Partial<Aula>) => {
    setSelectedAulaName(name || null);
  };
  

  const filteredAulas = aulas.filter((aula) => {

    const matchesSearch =
      aula.name.toLowerCase().includes(search.toLowerCase())

    const matchesState =
      !selectedState ||
      selectedState === aula.state ||
      (
        selectedState === "Disponible" && aula.state === "available"
      ) ||
      (
        selectedState === "Ocupado" && aula.state === "busy"
      ) ||
      (
        selectedState === "Mantenimiento" && aula.state === "maintenance"
      )

    const matchesTeacher =
      !selectedTeacher ||
      selectedTeacher === "Todos" ||
      aula.docenteAula?.some(
        docente =>
          docente.user.name === selectedTeacher
      )

    const matchesCourse =
      !selectedCourse ||
      selectedCourse === "Todos" ||
      aula.docenteAula?.some(
        docente =>
          docente.curso.name === selectedCourse
      )

    return (
      matchesSearch &&
      matchesState &&
      matchesTeacher &&
      matchesCourse
    )
    
  })
  

  return (
    <div className="p-10 flex flex-col gap-6 ">
      <div>
        <AulaFilters icon={Search} placeholder="Buscar aula..." aulas={aulas} search={search} setSearch={setSearch} selectedState={selectedState} setSelectedState={setSelectedState} selectedTeacher={selectedTeacher} setSelectedTeacher={setSelectedTeacher} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
      </div>

      <AulaGrid aulas={filteredAulas} handleModal={handleModal}/>

      {currentAula && (
        <AulaModal
          name={currentAula.name}
          description={currentAula.description}
          capacity={currentAula.capacity}
          state={currentAula.state}
          docenteAula={currentAula.docenteAula}
          onClose={() => setSelectedAulaName(null)}
        />
      )}
    </div>
  );
};

export default ListPage;