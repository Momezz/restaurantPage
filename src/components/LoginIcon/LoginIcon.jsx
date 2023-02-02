import { Link } from 'react-router-dom';
import './styles.css';

const LoginIcon = () => (
  <div className="navigation__icon-cont">
    <Link className="navigation__icon" to="/login">Login</Link>
    <Link className="navigation__icon" to="/sign-up">sign up</Link>
  </div>
);

export default LoginIcon;
