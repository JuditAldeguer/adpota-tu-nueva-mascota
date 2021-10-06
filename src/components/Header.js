//Styless
import '../styles/layout/header.scss';
//images
import perrito from '../images/perrito.png';
import esFlag from '../images/es.png';
import caFlag from '../images/ca.png';
import enFlag from '../images/en.png';
//components
import Input from '../components/secondary-components/Input';
import { useState } from 'react';

const Header = (props) => {
  const [infoShown, setInfoShown] = useState('hidden');

  const handleClickSearch = () => {
    setInfoShown('');
    // pendiente toggle
  };

  return (
    <header className="header">
      <div className="header--div">
        <nav>
          <ul>
            <li className="language_es ">
              <a href="">
                {/* pendiente */}
                <span className="language_flag">
                  <img title="Español" src={esFlag} alt="Español" />
                </span>
                <span className="language_native span">Español</span>
                <span className="language_translated span">Spanish</span>
                <span className="language_code span">es</span>
              </a>
            </li>
            <li className="language_ca">
              <a href="">
                {/* pendiente */}
                <span className="language_flag">
                  <img title="Català" src={caFlag} alt="Català" />
                </span>
                <span className="language_native span">Català</span>
                <span className="language_translated span">Català</span>
                <span className="language_code span">ca</span>
              </a>
            </li>
            <li className="language_en ">
              <a href="">
                {/* pendiente */}
                <span className="language_flag">
                  <img title="English" src={enFlag} alt="English" />
                </span>{' '}
                <span className="language_native span">English</span>
                <span className="language_translated span">English</span>
                <span className="language_code span">en</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header--div div2">
        <img className="header--img" src={perrito} alt="pata" />
        <i className="fas fa-search" onClick={handleClickSearch}></i>
        <form className={infoShown} action="">
          <Input />
        </form>
      </div>
      <menu>{/* hamburguesa */}</menu>
    </header>
  );
};

export default Header;
