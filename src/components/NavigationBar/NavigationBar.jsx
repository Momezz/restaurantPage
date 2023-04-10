import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';
import LoginIcon from '../LoginIcon/LoginIcon';

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/profile');
  };
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
      <div className="navigation__validations">
        <LoginIcon />
        <button
          type="submit"
          onClick={handleLogout}
          className={userLoged && userLoged.length !== 0 ? 'navigation__btn-logout' : 'navigation__btn-logout-none'}
        >
          <ion-icon name="person-outline" />
        </button>
      </div>
    </article>
  );
};

export default NavigationBar;
