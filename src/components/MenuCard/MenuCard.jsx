/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../../features/shopping/shoppingSlice';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import './styles.css';
// eslint-disable-next-line import/no-named-as-default

const MenuCard = ({ product }) => {
  const dispatch = useDispatch();
  const [deleteProduct, setDeleteProduct] = useState(0);
  const handleDelet = () => {
    setDeleteProduct(product._id);
  };

  const item = {
    name: product.name,
    price: product.price,
  };
  const handleAdd = () => {
    dispatch(addItem(item));
  };
  return (
    <article className="menu-card__container" key={product._id}>
      <div className="menu-card__table">
        <button onClick={handleDelet} className="menu-card__delete-icon" type="button"><ion-icon name="trash-outline" /></button>
        <div className="menu-card__tr">
          <h2 className="menu-card__td-title menu-card__td">{product.name}</h2>
          <Link className="menu-card__see-detail" to={`/details/${product._id}`}>See More</Link>
          <img className="menu-cards__img" src={product.image} alt="Imagen" />
          <span className="menu-card__td">{product.price}</span>
        </div>
        <hr className="menu-card__hr" />
      </div>
      <div className="menu-card__link-cont">
        <Link className="menu-card__link" to={`/manage-conten/${product._id}`}><ion-icon name="restaurant-outline" /></Link>
      </div>
      <div className="menu-card__delet-component">
        {
          deleteProduct === product._id && (
            <div className="menu-card__confir-delete">
              <ConfirmDelete id={product._id} />
            </div>
          )
        }
        <div className="menu-card__shopping">
          <button className="menu-card__shopping-cart" onClick={handleAdd} type="button"><ion-icon name="cart-outline" /></button>
        </div>
      </div>
    </article>
  );
};

MenuCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default MenuCard;
