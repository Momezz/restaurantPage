import './styles.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <article className="navigation__card">
    <h1 className="navigation__title">Restaurante</h1>
    <nav>
      <ul className="navigation__ul">
        <li className="navigation__li">
          <Link className="navigation__text" to="/">HOME</Link>
        </li>
        <li className="navigation__li">
          <Link className="navigation__text" to="/">ABOUT</Link>
        </li>
        <li className="navigation__li">
          <Link className="navigation__text" to="/">MENU</Link>
        </li>
      </ul>
    </nav>
  </article>
);

export default NavigationBar;
