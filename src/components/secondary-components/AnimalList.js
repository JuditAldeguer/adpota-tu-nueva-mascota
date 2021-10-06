import AnimalCard from '../secondary-components/AnimalCard';

const AnimalList = (props) => {
  const renderList = () => {
    props.animalsList.map((animal) => {
      return (
        <li>
          <AnimalCard animal={animal} />
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default AnimalList;
