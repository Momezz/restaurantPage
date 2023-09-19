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
  const item = {
    id: product._id,
    name: product.name,
    price: product.price,
  };

  return (
    <article className="menu-cart__container" key={product._id}>
      <div className="menu-cart__table">
        <button
          onClick={handleDelet}
          className={role ? 'menu-cart__delete-icon' : 'menu-cart__delete-none'}
          type="button"
        ><ion-icon name="trash-outline" />
        </button>
        <div className="menu-cart__tr">
          <h2 className="menu-cart__td-title menu-cart__td">{product.name}</h2>
          <Link className="menu-cart__see-detail" to={`/details/${product._id}`}>See More</Link>
          <img className="menu-carts__img" src={product.image} alt="Imagen" />
          <span className="menu-cart__td">{formatPrice(product.price)}</span>
        </div>
        <hr className="menu-cart__hr" />
      </div>
      <div className="menu-cart__link-cont">
        <Link
          className="menu-cart__link"
          to={`/manage-conten/${product._id}`}
        >
          <ion-icon name="restaurant-outline" />
        </Link>
        <div className={!role ? 'menu-cart__link-layer' : null}> </div>
      </div>
      <div className="menu-cart__delet-component">
        {
          deleteProduct === product._id && (
            <div className="menu-cart__confir-delete">
              <ConfirmDelete id={product._id} />
            </div>
          )
        }
      </div>
      <div className="menu-cart__shopping-cart">
        <ShoppingCart item={item} />
      </div>
    </article>
  );
};

MenuCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default MenuCard;
