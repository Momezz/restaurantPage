import './styles.css';
import { useState } from 'react';

const BookingsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    numberpoeple: 0,
    date: '',
    time: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <article className="bookings-form__container">
      <h1 className="bookings-form__title">Reserva</h1>
      <p className="bookings-form__paragraph">
        All that remains is to reserve your table.
        You and your friends are welcome at Restaurant.
      </p>
      <form className="bookings-form__subcont" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleInputChange}
          className="bookings-form__input"
        /><br /><br />

        <input
          type="number"
          id="number-poeple"
          name="numberpoeple"
          placeholder="Number of people"
          value={formData.number}
          onChange={handleInputChange}
          className="bookings-form__input"
        /><br /><br />

        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="bookings-form__input"
        /><br /><br />

        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="bookings-form__input"
        /><br /><br />

        <input className="bookings-form__btn" type="submit" value="Reservar" />
      </form>
    </article>
  );
};

export default BookingsForm;
