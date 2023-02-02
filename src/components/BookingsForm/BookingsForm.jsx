import './styles.css';
import useForm from '../../hooks/useForm';

const BookingsForm = () => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(form);
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
          name="numberpoeple"
          placeholder="Number of people"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />

        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className="bookings-form__input"
          required
        /><br /><br />

        <input
          type="time"
          id="time"
          name="time"
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
