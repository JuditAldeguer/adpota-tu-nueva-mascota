//image
import ModalWindow from './ModalWindow';
import perrito from '../../images/perrito.png';

const AnimalDetail = (props) => {
  return (
    <ModalWindow>
      <article>
        <h2>Nombre</h2>
        <img src={perrito} alt="perro" />
        <ul>
          <li>
            {' '}
            <strong>Edad:</strong> 1 año
          </li>
          <li>
            {' '}
            <strong>Sexo:</strong> Macho
          </li>
          <li>
            {' '}
            <strong>Color:</strong> Negro, blanco y marron{' '}
          </li>
          <li>
            {' '}
            <strong>Esterilizado:</strong> Si
          </li>
          <li>
            {' '}
            <strong>Estado de salud:</strong> Necesidad de cuidados nivel medios
          </li>
        </ul>
        <p>
          Pequeña presentación del animal, su historia e información adicional
        </p>
      </article>
    </ModalWindow>
  );
};

export default AnimalDetail;
