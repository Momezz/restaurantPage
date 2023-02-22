import './styles.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { getBookings, createBooking } from '../../features/bookings/bookings';

const BookingsForm = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, []);
  const userLoged = JSON.parse(localStorage.getItem('userData'));
  const reservationData = {
    idUser: userLoged._id,
    name: form.name,
    reservationDate: new Date(form.reservationDate),
    reservationTime: form.reservationTime,
    numberPeople: form.numberPeople,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(createBooking(reservationData));
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <article className="bookings-form__container">
      <h2 className="bookings-form__title">Hello, Sign in</h2>
      <form className="bookings-form__subcont" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />
        <input
          type="number"
          id="number-poeple"
          name="numberPeople"
          placeholder="Number of people"
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
    </article>
  );
};

export default BookingsForm;
