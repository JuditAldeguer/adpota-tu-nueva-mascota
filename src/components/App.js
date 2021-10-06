import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'; // al generar id={uuid()}
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
import date from '../services/date'; //fecha usamos date: date.getCurrentDate()
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import AnimalList from './/secondary-components/AnimalList';
import AnimalDetail from './/secondary-components/AnimalDetail';
import NotFoundPage from './secondary-components/NotFoundPage';
//images
import maps from '../images/maps.jpeg';

function App() {
  const [animalsList, setAnimalsList] = useState([]);
  const routeData = useRouteMatch('/product-detail/:id');
  const animalId = routeData !== null ? routeData.params.animalId : '';

  return (
    <div className="page">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <h1>Bienvenida a la pagina de inicio</h1>
            <h2>Colaboradores</h2>
            <ul>
              Lista de Colaboradores
              <li>1</li>
              <li>2</li>
            </ul>
            <img src={maps} alt="mapa" />
            <h2>Patrocinadores/as</h2>
            <p>Asociaciones que ayudan al funcionamiento del proyecto</p>
            <ul>
              Lista de Colaboradores
              <li>1</li>
              <li>2</li>
            </ul>
          </Route>
          <Route path="/catalogo/">
            <Form />
            <AnimalList animalsList={animalsList} animalId={animalId} />
          </Route>
          <Route path="/catalogo-detalle/:animalId">
            <AnimalDetail animalsList={animalsList} animalId={animalId} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
