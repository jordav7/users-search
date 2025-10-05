// src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>Consulta de Usuarios</h1>
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Email</th></tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
