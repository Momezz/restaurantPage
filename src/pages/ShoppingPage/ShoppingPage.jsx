import './styles.css';
import { useSelector } from 'react-redux';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const ShoppingPage = () => {
  const { items } = useSelector((state) => state.shopping);
  console.log('->', JSON.stringify(items));
  const totalPrice = items
    .filter((item) => item.price > 20)
    .reduce((acc, product) => acc + product.price, 0);

  return (
    <section className="shopping-page__container">
      <nav>
        <NavigationBar />
      </nav>
      <ul className="shopping-cart-items">
        {items.map((item) => (
          <div className="shoppin-page__items" key={item._id}>
            <p className="shoppin-page__name"><span className="shopping-page__key">Product:</span>{item.name}</p>
            <p className="shoppin-page__price"><span className="shopping-page__key">Price:</span>{item.price}</p>
          </div>
        ))}
      </ul>
      <span>Total: {totalPrice}</span>
    </section>
  );
};

export default ShoppingPage;
