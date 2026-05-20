import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import AulaFilters from "@/user/components/AulaFilters";
import AulaGrid from '../../components/AulaGrid';
import type { Aula } from '@/user/types/aula.response';

const ListPage = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const socket = io('https://organimap-backend.onrender.com/api', {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('Conectado', socket.id);
      const paginationDto = {
        limit: 10, // o el límite que uses
        offset: 0,
      };

      socket.emit('findAllAulaSocket', paginationDto, (data: Aula[]) => {
        console.log('Data recibida del emit:', data);
        
        setAulas(data.aulas);
      });
    });

    socket.on('aulasUpdated', (data) => {
      console.log('Aulas actualizadas', data);
      setAulas(data);
    });

    socket.on('connect_error', (err) => {
      console.error('Error socket', err);
    });

    return () => {
      socket.off('connect');
      socket.off('aulasUpdated');
      socket.off('connect_error');
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-10 flex flex-col gap-6">
      <div>
        <AulaFilters />
      </div>
      <AulaGrid aulas={aulas} />
    </div>
  );
};

export default ListPage;