import BookingsForm from '../../components/BookingsForm/BookingsForm';
import NavigatioBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import './styles.css';
import OpeningOurs from '../../components/OpeningHours/OpeningOurs';

const Bookings = () => (
  <section className="bookings__container">
    <nav className="bookings__navigation-bar">
      <NavigatioBar />
    </nav>
    <section className="bookings__subcontainer">
      <article className="bookings__bookings-form">
        <BookingsForm />
      </article>
      <article className="bookings__bookings-form">
        <OpeningOurs />
      </article>
    </section>
    <article className="bookings__footer">
      <Footer />
    </article>
  </section>
);

export default Bookings;
