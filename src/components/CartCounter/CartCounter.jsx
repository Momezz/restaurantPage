import './styles.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartCounter = () => {
  const { items } = useSelector((state) => state.shopping);
  return (
    <Link to="/cart">
      <div className="cart-counter__container">
        <div className="cart-counter__item">
          {items.length}
        </div>
      </div>
    </Link>
  );
};

export default CartCounter;
