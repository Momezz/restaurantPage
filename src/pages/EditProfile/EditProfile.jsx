import './styles.css';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const EditProfile = () => (
  <section className="edit-profile-page__container">
    <nav className="edit-profile-page__nav">
      <NavigationBar />
    </nav>
    <article className="edit-profile-page__form">
      <EditProfileForm />
    </article>
    <footer className="edit-profile-page__footer">
      <Footer />
    </footer>
  </section>
);

export default EditProfile;
