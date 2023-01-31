import { useState } from 'react';
import NavigatioBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    party: '',
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
    <>
      <NavigatioBar />;
      <form className="bookings-form__container" onSubmit={handleSubmit}>
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
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
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
      <Footer />
    </>

  );
};

export default Bookings;
