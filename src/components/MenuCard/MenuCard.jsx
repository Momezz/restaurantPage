import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { convert } from '../../services/auth';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import { formatPrice } from '../../services/menus';
import './styles.css';

const MenuCard = ({ product }) => {
  const userLogin = useSelector((state) => state.login.user.user);
  const [deleteProduct, setDeleteProduct] = useState(0);

  const handleDelet = () => {
    setDeleteProduct(product._id);
  };

  const role = convert(userLogin);

  return (
    <article className="menu-card__container" key={product._id}>
      <Link
        to={`/details/${product._id}`}
      >
        <div className="menu-card__table">
          <button
            onClick={handleDelet}
            className={role ? 'menu-card__delete-icon' : 'menu-card__delete-none'}
            type="button"
          ><ion-icon name="trash-outline" />
          </button>
          <div className="menu-card__tr">
            <h2 className="menu-card__td-title menu-card__td">{product.name}</h2>
            <div className="menu-card__img-container">
              <img className="menu-card__img" src={product.image} alt="Imagen" />
            </div>
            <span className="menu-card__td">{formatPrice(product.price)}</span>
          </div>
          <hr className="menu-card__hr" />
        </div>
      </Link>
      <div className="menu-card__link-cont">
        <Link
          className="menu-card__link"
          to={`/manage-conten/${product._id}`}
        >
          <ion-icon name="restaurant-outline" />
        </Link>
        <div className={!role ? 'menu-card__link-layer' : null}> </div>
      </div>
      <div className="menu-card__delet-component">
        {
          deleteProduct === product._id && (
            <div className="menu-card__confir-delete">
              <ConfirmDelete id={product._id} />
            </div>
          )
        }
      </div>
      <div className="menu-card__shopping-cart">
        <ShoppingCart item={product} />
      </div>
    </article>
  );
};

MenuCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default MenuCard;
