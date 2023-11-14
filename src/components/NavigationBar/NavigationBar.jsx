import './styles.css';
import { Link } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';
import LoginIcon from '../LoginIcon/LoginIcon';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';

const NavigationBar = () => {
  const userLoged = JSON.parse(localStorage.getItem('userData'));
  return (
    <article className="navigation__card">
      <h1 className="navigation__title">Restaurant</h1>
      <nav className="navigation__cont-ul">
        <ul className="navigation__ul">
          <div className="navigation__li">
            <Link className="navigation__text" to="/">Inicio</Link>
          </div>
          <div className="navigation__li">
            {
              !userLoged
                ? <Link className="navigation__text" to="/login">Reservas</Link>
                : <Link className="navigation__text" to="/bookings">Reservas</Link>
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
              {
                userLoged.image
                  ? <img className="navigation__img" src={userLoged.image} alt="Imagen" />
                  : <img className="navigation__img" src={profileDefault} alt="imagen por defecto" />
              }
            </Link>
          )
      }
    </article>
  );
};

export default NavigationBar;
