import './styles.css';
import { Link } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';
import LoginIcon from '../LoginIcon/LoginIcon';

const NavigationBar = () => {
  const userLoged = JSON.parse(localStorage.getItem('userData'));
  return (
    <article className="navigation__card">
      <h1 className="navigation__title">Restaurant</h1>
      <nav className="navigation__cont-ul">
        <ul className="navigation__ul">
          <div className="navigation__li">
            <Link className="navigation__text" to="/">HOME</Link>
          </div>
          <div className="navigation__li">
            {
              !userLoged
                ? <Link className="navigation__text" to="/login">BOOKINGS</Link>
                : <Link className="navigation__text" to="/bookings">BOOKINGS</Link>
            }
          </div>
          <div className="navigation__li">
            <Link className="navigation__text" to="/menu">MENU</Link>
          </div>
        </ul>
      </nav>
      <div className="navigation__count-items">
        <CartCounter />
      </div>
      {
        !userLoged
          ? (
            <div className="navigation__login-icon">
              <LoginIcon />
            </div>
          )
          : (
            <Link className="navigation__btn-logout" to="/profile">
              <img className="navigation__img" src={userLoged.image} alt="Imagen" />
            </Link>
          )
      }
    </article>
  );
};

export default NavigationBar;
