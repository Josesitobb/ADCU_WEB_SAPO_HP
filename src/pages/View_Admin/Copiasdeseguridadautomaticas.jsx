import React, { useState } from 'react';
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer';

export default function Copiasdeseguridadautomaticas() {
  const [backups, setBackups] = useState([
    { id: 1, fecha: '2025-04-08 14:32', estado: '✅ ', tipo: 'Automática', seleccionado: false },
    { id: 2, fecha: '2025-04-07 14:30', estado: '✅ ', tipo: 'Automática', seleccionado: false },
    { id: 3, fecha: '2025-04-06 12:00', estado: '❌ ', tipo: 'Manual', seleccionado: false },
  ]);

  const toggleSeleccion = (id) => {
    setBackups((prev) =>
      prev.map((copia) =>
        copia.id === id ? { ...copia, seleccionado: !copia.seleccionado } : copia
      )
    );
  };

  const cambiarEstado = (id) => {
    setBackups((prev) =>
      prev.map((copia) => {
        if (copia.id === id) {
          const nuevoEstado = copia.estado === '✅ ' ? '❌ ' : '✅ ';
          const nuevaFecha = nuevoEstado === '✅ ' ? new Date().toLocaleString() : copia.fecha;
          return {
            ...copia,
            estado: nuevoEstado,
            fecha: nuevaFecha,
          };
        }
        return copia;
      })
    );
  };
  return (
    <div>
      <MenuHamburguesa />
      <h1 className="text-center">Copias de seguridad automáticas</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>N° de contrato</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {backups.map((copia) => (
            <tr key={copia.id}>
              <td>{copia.id}</td>
              <td>{copia.fecha}</td>
              <td>{copia.estado}</td>
              <td>{copia.tipo}</td>
              <td>
                <Button
                  variant={copia.estado === '✅ Exitosa' ? 'danger' : 'success'}
                  size="sm"
                  onClick={() => cambiarEstado(copia.id)}
                >
                  {copia.estado === '✅ Exitosa' ? 'Desactivar' : 'Activar'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer/>
    </div>
  );
}
