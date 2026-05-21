import AulaFilters from "@/user/components/AulaFilters";
import AulaGrid from '../../components/AulaGrid';
import useAulaSocket from '@/hooks/useAulaSocket';
import type { Aula } from "@/user/types/aula.response";
import AulaModal from "@/user/components/AulaModal";
import { useState } from "react";

const ListPage = () => {
  const { aulas } = useAulaSocket();
  
  const [selectedAulaName, setSelectedAulaName] = useState<string | null>(null);

  const currentAula = aulas?.find(aula => aula.name === selectedAulaName);

  const handleModal = ({ name }: Partial<Aula>)  => {
    setSelectedAulaName(name || null);
  };

  return (
    <div className="p-10 flex flex-col gap-6">
      <div>
        <AulaFilters />
      </div>
      
      <AulaGrid aulas={aulas} handleModal={handleModal}/>

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