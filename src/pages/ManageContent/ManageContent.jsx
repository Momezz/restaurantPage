import NavigatioBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import './styles.css';
import ManagementForm from '../../components/ManagementForm/ManagementForm';

const ManageContent = () => (
  <section className="bookings__container">
    <nav className="bookings__navigation-bar">
      <NavigatioBar />
    </nav>
    <section className="bookings__subcontainer">
      <article className="bookings__bookings-form">
        <ManagementForm />
      </article>
    </section>
    <article className="bookings__footer">
      <Footer />
    </article>
  </section>
);

export default ManageContent;
