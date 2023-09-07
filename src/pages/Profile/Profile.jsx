import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserById } from '../../features/users/usersSlice';
import { login } from '../../services/auth';
import './styles.css';

const Profile = () => {
  const user = useSelector((state) => state.user.users);
  // const userLogin = useSelector((state) => state.login.user.user);
  const userId = JSON.parse(localStorage.getItem('userData'));

  if (Object.keys(user).length > 0) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(userId._id));
  }, []);
  // console.log('user.length', userStorage.bookings[0].reservationTime);

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    dispatch(login());
  };
  console.log('userLogin', userStorage.bookings[0]);
  // console.log('user', user.bookings.length);
  return (
    <section className="profile__container">
      <nav className="profile__nav">
        <Link className="profile__link" to="/">Home</Link>
        <Link className="profile__link" to={`/sign-up/${userStorage._id}`}>Edit</Link>
        <button
          type="submit"
          className="profile__btn-logout"
          onClick={handleLogout}
        >
          <ion-icon name="power-outline" />
        </button>
      </nav>
      <article className="profile__data">
        <img className="profile__image" src={userStorage.image} alt="img" />
        <h2 className="profile__name">{userStorage.name}</h2>
        <div className="profile__items-cont">
          <div className={userStorage.bookings[0] !== undefined || Object.keys(userStorage.bookings[0]).length < 2 ? 'profile__items-booking' : 'profile__items-booking-none'}>
            <h3 className="profile__items-booking-tile">Hello <span>{userStorage.name}</span></h3>
            <p>
              you made a reservation for the date&nbsp;
              <span>
                {userStorage.bookings[0] ? new Date(userStorage.bookings[0].reservationDate).toISOString().split('T')[0] : 'Null'}&nbsp;
              </span>
              at <span>{userStorage.bookings[0] ? userStorage.bookings[0].reservationTime : 'Null'}</span>
            </p>
          </div>
          <div className="profile__bookings-length">
            <p className="profile__items">Bookings</p>
            <span className="profile__items">{userStorage.bookings.length}</span>
          </div>
        </div>
        <div className="profile__items-cont">
          <div className="profile__items-booking">
            <h3 className="profile__items-booking-tile">Hello <span>Name</span></h3>
            <p>
              Your last purchase was some potatoes worth<span> $ 35 </span>
            </p>
          </div>
          <div>
            <p className="profile__items">Shopping</p>
            <span className="profile__items">1</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
