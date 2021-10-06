//Styless
import '../styles/layout/header.scss';
<<<<<<< HEAD
import perrito from '../images/perrito.png';

const Header = (props) => {
  return (
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
=======
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };

  return (
    <header>
      <h1 className="title">Starter Kit</h1>
      <Links productId={props.productId} />
      <button title="atrás" onClick={handleBackBtn}>
        Volver atrás
      </button>
>>>>>>> dev
    </header>
  );
};

export default Header;
