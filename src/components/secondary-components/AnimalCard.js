//image
import { NavLink } from 'react-router-dom';
import perrito from '../../images/perrito.png';

const AnimalCard = (props) => {
  return (
    <NavLink
      to={`/animal-detail/${props.animalId}`}
      title="Detalle del Animal"
      activeClassName="selected-link"
    >
      <article>
        <h2>Info del animal</h2>
        <img src={perrito} alt="perro" />
      </article>
    </NavLink>
  );
};

export default AnimalCard;
