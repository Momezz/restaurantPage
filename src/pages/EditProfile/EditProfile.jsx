import './styles.css';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const EditProfile = () => (
  <section className="sign-up__container">
    <nav className="sign-up__nav">
      <NavigationBar />
    </nav>
    <article className="sign-up__form">
      <EditProfileForm />
    </article>
    <footer className="sign-up__footer">
      <Footer />
    </footer>
  </section>
);

export default EditProfile;
