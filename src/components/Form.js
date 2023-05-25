import React, { useState } from 'react';

const Form = ({ addData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [paid, setPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: Date.now(),
      name,
      email,
      phone,
      course,
      price,
      paid,
    };

    addData(newData);

    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setPrice('');
    setPaid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar nuevo registro</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Curso:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pagado:</label>
        <button
          className={paid ? 'paid-btn' : ''}
          onClick={() => setPaid(true)}
          type="button"
        >
          True
        </button>
        <button
          className={!paid ? 'paid-btn' : ''}
          onClick={() => setPaid(false)}
          type="button"
        >
          False
        </button>
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
