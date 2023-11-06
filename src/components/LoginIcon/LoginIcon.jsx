import { Link } from 'react-router-dom';
import './styles.css';

const LoginIcon = () => (
  <div className="login-icon__container">
    <Link className="login-icon__btn login-icon__btn-left" to="/login">I am a VIP client</Link>
    <Link className="login-icon__btn login-icon__btn-right" to="/sign-up">I want to be a VIP client</Link>
  </div>
);

export default LoginIcon;
