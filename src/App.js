import React, { useState } from 'react';
import Form from './components/Form';
import DataList from './components/DataList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [downloadName, setDownloadName] = useState('data');

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const updateData = (updatedData) => {
    const updatedList = data.map((item) => {
      if (item.id === updatedData.id) {
        return updatedData;
      }
      return item;
    });
    setData(updatedList);
  };

  const deleteData = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  const filterData = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredData = data.filter((item) =>
    item.course.toLowerCase().includes(filter.toLowerCase())
  );

  const downloadJSON = () => {
    const json = JSON.stringify(data);
    const element = document.createElement('a');
    element.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(json);
    element.download = `${downloadName}.json`;
    element.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);
      setData(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <div className="App">
      <h1>CRUD en React</h1>
      <Form addData={addData} />
      <Filter filterData={filterData} />
      <DataList
        data={filteredData}
        updateData={updateData}
        deleteData={deleteData}
      />
      <input type="file" accept=".json" onChange={handleFileChange} />
      <div className="DownloadForm">
        <label htmlFor="downloadName">Nombre del archivo:</label>
        <input
          type="text"
          id="downloadName"
          value={downloadName}
          onChange={(e) => setDownloadName(e.target.value)}
        />
        <button className="download-btn" onClick={downloadJSON}>
          Descargar JSON
        </button>
      </div>
    </div>
  );
}

export default App;
