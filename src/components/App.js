import '../styles/App.scss';
import { useState } from 'react';
import logoPatas from '../images/icono-patas.jpeg';

function App() {
  //estados
  const [] = useState('');

  //funciones

  //return
  return (
    <div>
      <header className="header">
        <h1 className="header--title">
          Encuentra tu mitad perruna{' '}
          <img className="header--img" src={logoPatas} alt="pata" />
        </h1>
        <menu>{/* hamburguesa */}</menu>
      </header>
      <main>contenido</main>
    </div>
  );
}

export default App;
