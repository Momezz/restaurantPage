import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const HomeDishes = ({ menu }) => {
  const [display, setDisplay] = useState(false);
  const handleSetTrue = () => {
    setDisplay(true);
  };
  const handleSetFalse = () => {
    setDisplay(false);
  };

  return (
    <div
      className="home-dishes__container"
      onMouseEnter={handleSetTrue}
      onMouseLeave={handleSetFalse}
    >
      <img className="home-dishes__img" src="https://tse4.mm.bing.net/th?id=OIP.qxeWJ8vokM7ra-E6vSjTngHaFZ&pid=Api&P=0" alt="Imagen" />
      <div className={display ? 'home-dishes__text' : 'home-dishes__none'}>
        <h2 className="home-dishes__title">{menu.name}</h2>
        <p className="home-dishes__paragraph">{menu.description}</p>
        <span className="home-dishes__price">{menu.price}</span>
      </div>
    </div>
  );
};
HomeDishes.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default HomeDishes;
