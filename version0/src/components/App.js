import '../styles/App.scss';
import { useState } from 'react';
import perrito from '../images/perrito.png';

function App() {
  //estados
  const [] = useState('');

  //funciones

  //return
  return (
    <div>
      <header className="header">
        <div className="header--div">
          <img className="header--img__lang" src={perrito} alt="pata" />
        </div>
        <div className="header--div div2">
          <img className="header--img" src={perrito} alt="pata" />
          <h2>hola</h2>
          <i className="fas fa-search"></i>
        </div>
        <menu>{/* hamburguesa */}</menu>
      </header>
      <main>contenido</main>
    </div>
  );
}

export default App;
