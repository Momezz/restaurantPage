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
        <img className="profile__image" src={roles.image} alt="imagen" />
        <h2 className="prifile__name">{roles.name}</h2>
        <div className="prifile__items-cont">
          <p className="prifile__items">Reservas</p>
          <span className="prifile__items">0</span>
        </div>
        <div className="prifile__items-cont">
          <p className="prifile__items">Pedidos </p>
          <span className="prifile__items">0</span>
        </div>
      </article>
    </section>
  );
};

export default Profile;
