import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CartCounter from '../CartCounter/CartCounter';
import { login } from '../../services/auth';
import LoginIcon from '../LoginIcon/LoginIcon';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(login());
  };
  return (
    <article className="navigation__card">
      <h1 className="navigation__title">Restaurant</h1>
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
      <div className="navigation__validations">
        <LoginIcon />
        <button
          type="submit"
          onClick={handleLogout}
          className="navigation__btn-logout"
        >
          <ion-icon name="power-outline" />
        </button>
      </div>
    </article>
  );
};

export default NavigationBar;
