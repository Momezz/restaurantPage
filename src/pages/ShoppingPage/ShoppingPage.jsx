import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import { removeItem } from '../../features/shopping/shoppingSlice';

const ShoppingPage = () => {
  const { items } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  const handleEmpty = (id) => {
    dispatch(removeItem(id));
  };
  const totalPrice = items
    .filter((item) => item.price > 20)
    .reduce((acc, product) => acc + product.price, 0);

  return (
    <section className="shopping-page__container">
      <nav className="shopping-page__nav">
        <NavigationBar />
      </nav>
      <div className="shopping-cart-items">
        {items.length === 0
          ? <h2 className="shoppin-page__empty">You still don&rsquo;t have products here</h2>
          : items.map((item) => (
            <li className="shoppin-page__items" key={item.id}>
              <p className="shoppin-page__name"><span className="shopping-page__key">-</span>{item.name}</p>
              <p className="shoppin-page__price"><span className="shopping-page__key">$</span>{item.price}</p>
              <button
                className="shopping-page__btn"
                type="submit"
                onClick={() => handleEmpty(item.id)}
              >
                <ion-icon name="trash-outline" />
              </button>
            </li>
          ))}
        <div className="shopping-page__sub-cont">
          <div className="shopping-page__total">Total: $ {totalPrice}</div>
          <div className="shopping-page__btn-pay">Buy</div>
        </div>
      </div>
      <footer className="shopping-page__footer">
        <Footer />
      </footer>
    </section>
  );
};

export default ShoppingPage;
