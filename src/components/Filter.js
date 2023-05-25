import React, { useState } from 'react';

const Filter = ({ filterData }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = () => {
    filterData(filterValue);
  };

  return (
    <div>
      <h2>Filtro</h2>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Filtrar por curso"
      />
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
};

export default Filter;
