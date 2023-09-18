import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../services/menus';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './styles.css';

const HomeDishes = ({ menu }) => {
  const [display, setDisplay] = useState(false);
  const handleSetTrue = () => {
    setDisplay(true);
  };
  const handleSetFalse = () => {
    setDisplay(false);
  };
  const item = {
    id: menu._id,
    name: menu.name,
    price: menu.price,
  };

  return (
    <div
      className="home-dishes__container"
      onMouseEnter={handleSetTrue}
      onMouseLeave={handleSetFalse}
    >
      <img className="home-dishes__img" src={menu.image} alt="Imagen" />
      <Link to={`/details/${menu._id}`}>
        <div className={display ? 'home-dishes__text' : 'home-dishes__none'}>
          <h2 className="home-dishes__title">{menu.name}</h2>
          <span className="home-dishes__price">{formatPrice(menu.price)}</span>
        </div>
      </Link>
      <div className={display ? 'home-dishes__shopping-cart' : 'home-dishes__none'}>
        <ShoppingCart item={item} />
      </div>
    </div>
  );
};
HomeDishes.propTypes = {
  menu: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default HomeDishes;
