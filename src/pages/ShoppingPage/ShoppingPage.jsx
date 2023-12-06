import './styles.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import PayNowForm from '../../components/PayNowForm/PayNowForm';
import ShoppingCartItem from '../../components/ShoppingCartItem/ShoppingCartItem';

const stripePromise = loadStripe('pk_test_51MF0poEjW2XUbvI3wVmCFBDPscgdUzDXONDz57bQp6GIg0YQ8d5H0c7T0415OfjiOaNXoHCkEKNiaUqguTsZdkUU00cjmEtXA7');

const ShoppingPage = () => {
  const { items } = useSelector((state) => state.shopping);
  const totalPrice = items
    .filter((item) => item.price > 5)
    .reduce((acc, product) => acc + product.price, 0);

  return (
    <section className="shopping-page__container">
      <nav className="shopping-page__nav">
        <NavigationBar />
      </nav>
      <article className="shopping-page__forms">
        <div className="shopping-page__cart-item">
          <ShoppingCartItem />
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <PayNowForm totalPrice={totalPrice} />
          </Elements>
        </div>
      </article>
      <footer className="shopping-page__footer">
        <Footer />
      </footer>
    </section>
  );
};

export default ShoppingPage;
