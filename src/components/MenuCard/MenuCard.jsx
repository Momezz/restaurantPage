import { Link } from 'react-router-dom';
import './styles.css';

const MenuCard = () => (
  <article className="menu-card__container">
    <table className="menu-card__table">
      <tr className="menu-card__tr">
        <td className="menu-card__td-title menu-card__td">Spaghetti Bolognese</td>
        <td className="menu-card__td">Bolitas de risotto ai funghi rellenas de queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka (4pza)</td>
        <td className="menu-card__td">$25.000</td>
      </tr>
      <hr className="menu-card__hr" />
    </table>
    <table className="menu-card__table">
      <tr className="menu-card__tr">
        <td className="menu-card__td-title menu-card__td">Spaghetti Bolognese</td>
        <td className="menu-card__td">Be queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka,Bolitas de risotto ai funghi rellenas de queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka (4pza)
        </td>
        <td className="menu-card__td">$25.000</td>
      </tr>
      <hr className="menu-card__hr" />
    </table>
    <table className="menu-card__table">
      <tr className="menu-card__tr">
        <td className="menu-card__td-title menu-card__td">Spaghetti Bolognese</td>
        <td className="menu-card__td">Bolitas de risottBolitas de risotto ai funghi rellenas Bolitas de risotto ai funghi rellenas  Bolitas de risotto ai funghi rellenas de queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka (4pza)</td>
        <td className="menu-card__td">$25.000</td>
      </tr>
      <hr className="menu-card__hr" />
    </table>
    <table className="menu-card__table">
      <tr className="menu-card__tr">
        <td className="menu-card__td-title menu-card__td">Spaghetti Bolognese</td>
        <td className="menu-card__td">Bolitas de risotto ai funghi rellenas de queso 100% mozzarella, empanizadas artesanalmente y bañadas en nuestra clásica salsa vodka (4pza)</td>
        <td className="menu-card__td">$25.000</td>
      </tr>
      <hr className="menu-card__hr" />
    </table>
    <div className="menu-card__link-cont">
      <Link className="menu-card__link" to="/manage-conten"><ion-icon name="restaurant-outline" /></Link>
    </div>
  </article>
);

export default MenuCard;
