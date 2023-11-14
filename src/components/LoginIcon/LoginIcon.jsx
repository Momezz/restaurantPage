import { Link } from 'react-router-dom';
import './styles.css';

const LoginIcon = () => (
  <div className="login-icon__container">
    <Link className="login-icon__btn login-icon__btn-left" to="/login">Soy un cliente VIP</Link>
    <Link className="login-icon__btn login-icon__btn-right" to="/sign-up">Quiero ser un cliente VIP</Link>
  </div>
);

export default LoginIcon;
