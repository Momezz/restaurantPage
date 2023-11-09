import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserById } from '../../features/users/usersSlice';
import ItemList from '../../components/ItemList/ItemList';
import { login, isEmptyObject } from '../../services/auth';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';
import './styles.css';

const Profile = () => {
  let user = useSelector((state) => state.user.users);
  const userId = JSON.parse(localStorage.getItem('userData'));

  if (!(isEmptyObject(user))) {
    localStorage.setItem('userData', JSON.stringify(user));
  } else {
    user = {};
  }
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(userId._id));
  }, []);

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    dispatch(login());
  };
  return (
    <section className="profile__container">
      <nav className="profile__nav">
        <Link className="profile__link" to="/">Inicio</Link>
        <Link className="profile__link" to={`/edit/${userStorage._id}`}>Editar</Link>
        <button
          type="submit"
          className="profile__btn-logout"
          onClick={handleLogout}
        >
          <ion-icon name="power-outline" />
        </button>
      </nav>
      <h2 className="profile__title">{userStorage.name}</h2>
      <div className="profile__sub-container">
        <div className="profile__cont-profile">
          {
            userStorage.image
              ? <img className="profile__img" src={userStorage.image} alt="Imagen" />
              : <img className="profile__img" src={profileDefault} alt="imagen por defecto" />
          }
          <div className="profile__nail profile__top-left" />
          <div className="profile__nail profile__top-right" />
          <div className="profile__nail profile__bottom-left" />
          <div className="profile__nail profile__bottom-right" />
        </div>
        {
          isEmptyObject(userStorage)
            || userStorage.bookings.length === undefined
            || userStorage.bookings.length === null
            || userStorage.bookings.length === 0
            ? (<h2 className="profile__sub-title">No hay reservas en tu historial.</h2>)
            : (
              <ul className="profile__cont-info">
                <h2 className="profile__sub-title">Tu historial de reservas</h2>
                {
                  userStorage.bookings.length > 0
                    ? userStorage.bookings.map((item) => (
                      <li className="profile__item" key={item._id}>
                        <ItemList item={item} />
                      </li>
                    ))
                    : null
                }
              </ul>
            )
        }
      </div>
    </section>
  );
};

export default Profile;
