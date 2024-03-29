import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/shopping/shoppingSlice';
import './styles.css';

const ShoppingCart = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="shopping-cart__container">
      <button
        className="shopping-cart__btn"
        onClick={handleAdd}
        type="button"
      >
        <ion-icon name="cart-outline" />
      </button>
    </div>
  );
};

ShoppingCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ShoppingCart;
