import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/shopping/shoppingSlice';
import { addToCart, formatPrice } from '../../services/menus';

const ShoppingCartItem = () => {
  const { items } = useSelector((state) => state.shopping);
  const totalPrice = items
    .filter((item) => item.price > 5)
    .reduce((acc, product) => acc + product.price, 0);
  const listItems = addToCart(items);
  const dispatch = useDispatch();
  const handleEmpty = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="shopping-cart-items__container">
      {items.length === 0 ? (
        <h2 className="shopping-cart-items__empty">Aún no tienes productos aquí</h2>
      ) : (
        listItems.map((item) => (
          <li className="shopping-cart-items__items" key={item.id}>
            <span className="shopping-cart-items__name">
              {item.repetNumber.length}&nbsp;
            </span>
            <span className="shopping-cart-items__name">&nbsp;{item.name}</span>
            <span className="shopping-cart-items__name">
              <span className="shopping-cart-items__key"> </span>
              {formatPrice(item.price)}
            </span>
            <button
              className="shopping-cart-items__btn"
              type="submit"
              onClick={() => handleEmpty(item.id)}
            >
              -<ion-icon name="trash-outline" />
            </button>
          </li>
        ))
      )}
      <div className="shopping-cart-items__total">
        Total: {formatPrice(totalPrice)}
      </div>
    </div>
  );
};

export default ShoppingCartItem;
