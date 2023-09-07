import './styles.css';
import Login from '../../components/Login/Login';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const FormLogin = () => (
  <section className="form-login__container">
    <nav className="form-login__nav">
      <NavigationBar />
    </nav>
    <article className="form-login__form">
      <Login />
    </article>
    <footer className="form-login__footer">
      <Footer />
    </footer>
  </section>
);

export default FormLogin;
