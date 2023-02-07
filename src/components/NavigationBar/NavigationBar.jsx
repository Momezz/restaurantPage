import './styles.css';
import { Link } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';
import LoginIcon from '../LoginIcon/LoginIcon';

const NavigationBar = () => (
  <article className="navigation__card">
    <h1 className="navigation__title">Restaurante</h1>
    <nav className="navigation__cont-ul">
      <ul className="navigation__ul">
        <div className="navigation__li">
          <Link className="navigation__text" to="/">HOME</Link>
        </div>
        <div className="navigation__li">
          <Link className="navigation__text" to="/bookings">BOOKINGS</Link>
        </div>
        <div className="navigation__li">
          <Link className="navigation__text" to="/menu">MENU</Link>
        </div>
      </ul>
    </nav>
    <div className="navigation__count-items">
      <CartCounter />
    </div>
    <LoginIcon />
  </article>
);

export default NavigationBar;
