import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const MenuCard = ({ product }) => (
  <article className="menu-card__container" key={product._id}>
    <div className="menu-card__table">
      <Link className="menu-card__link-ver" to={`/details/${product.id}`}>Ver</Link>
      <div className="menu-card__tr">
        <h2 className="menu-card__td-title menu-card__td">{product.name}</h2>
        <img className="menu-cards__img" src={product.image} alt="Imagen" />
        <p className="menu-card__td">{product.description}</p>
        <span className="menu-card__td">{product.price}</span>
      </div>
      <hr className="menu-card__hr" />
    </div>
    <div className="menu-card__link-cont">
      <Link className="menu-card__link" to="/manage-conten"><ion-icon name="restaurant-outline" /></Link>
    </div>
  </article>
);

MenuCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default MenuCard;
