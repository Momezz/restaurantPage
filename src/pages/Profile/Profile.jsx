import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../../services/users';
import './styles.css';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login.user);
  console.log('user', user);
  useEffect(() => {
    dispatch(getUserById(id));
  }, []);
  return (
    <section className="profile__container">
      <nav className="profile__nav">
        <Link className="profile__link" to="/">Home</Link>
        <Link className="profile__link" to={`/sign-up/${id}`}>Edit</Link>
        <button
          type="submit"
          className="profile__btn-logout"
        >
          <ion-icon name="power-outline" />
        </button>
      </nav>
      <article className="profile__data">
        <img className="profile__image" src={user.image} alt="imagen" />
        <h2 className="prifile__name">{user.name}</h2>
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
