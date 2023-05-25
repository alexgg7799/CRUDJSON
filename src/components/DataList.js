import React from 'react';

const DataList = ({ data, updateData, deleteData }) => {
  const handleUpdate = (id) => {
    const updatedData = data.find((item) => item.id === id);
    const updatedPaid = !updatedData.paid;

    updateData({ ...updatedData, paid: updatedPaid });
  };

  return (
    <div className="DataList">
      <h2>Lista de datos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Curso</th>
            <th>Precio</th>
            <th>Pagado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={item.paid ? 'paid' : 'unpaid'}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.course}</td>
              <td>{item.price}</td>
              <td>{item.paid ? 'Sí' : 'No'}</td>
              <td>
                <button
                  className="paid-btn"
                  onClick={() => handleUpdate(item.id)}
                >
                  Cambiar estado
                </button>
                <button onClick={() => deleteData(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
