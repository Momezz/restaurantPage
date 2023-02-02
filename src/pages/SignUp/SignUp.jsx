import './styles.css';
import CreateLogin from '../../components/CreateLogin/CreateLogin';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const FormLogin = () => (
  <section className="sign-up__container">
    <nav className="sign-up__nav">
      <NavigationBar />
    </nav>
    <article className="sign-up__form">
      <CreateLogin />
    </article>
    <footer className="sign-up__footer">
      <Footer />
    </footer>
  </section>
);

export default FormLogin;
