import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import './styles.css';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    dispatch(login());
  };
  return (
    <section className="profile__container">
      <nav className="profile__nav">
        <Link className="profile__link" to="/">Home</Link>
        <Link className="profile__link" to={`/sign-up/${roles._id}`}>Edit</Link>
        <button
          type="submit"
          className="profile__btn-logout"
          onClick={handleLogout}
        >
          <ion-icon name="power-outline" />
        </button>
      </nav>
      <article className="profile__data">
        <img className="profile__image" src={roles.image} alt="img" />
        <h2 className="profile__name">{roles.name}</h2>
        <div className="profile__items-cont">
          <p className="profile__items">Bookings</p>
          <span className="profile__items">0</span>
        </div>
        <div className="profile__items-cont">
          <p className="profile__items">Shoppings </p>
          <span className="profile__items">0</span>
        </div>
      </article>
    </section>
  );
};

export default Profile;
