import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { getBookings, createBooking } from '../../features/bookings/bookings';
import PaymentResponse from '../PaymentResponse/PaymentResponse';

const BookingsForm = () => {
  const [stateAction, setstateAction] = useState('');
  const [loading, setLoading] = useState(false);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  const userLogged = JSON.parse(localStorage.getItem('userData'));
  const booking = {
    id: userLogged._id,
    name: form.name,
    reservationDate: new Date(form.reservationDate),
    reservationTime: form.reservationTime,
    numberPeople: form.numberPeople,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await dispatch(createBooking(booking));
      if (result.payload) {
        setstateAction('Has reservado con éxito.');
        setTimeout(() => {
          navigate('/profile');
        }, 5000);
        setLoading(true);
      } else {
        setLoading(true);
        setstateAction('Se ha producido un error inesperado.');
      }
    } catch (error) {
      setstateAction('Se ha producido un error inesperado.');
      throw new Error(error);
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <article className="bookings-form__container">
      <h2 className="bookings-form__title">Hola, {userLogged.name}</h2>
      <form className="bookings-form__subcont" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />
        <input
          type="number"
          id="number-people"
          name="numberPeople"
          placeholder="Cantidad de personas"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />
        <input
          type="date"
          id="date"
          name="reservationDate"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />
        <input
          type="time"
          id="time"
          name="reservationTime"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />
        <input className="bookings-form__btn" type="submit" value="Reservar" />
      </form>
      <article className={loading ? 'bookings-form__visible' : 'bookings-form__hidden'}>
        <PaymentResponse stateAction={stateAction} />
      </article>
    </article>
  );
};

export default BookingsForm;
