//Styless
import '../styles/layout/header.scss';
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
    </header>
  );
};

export default Header;
