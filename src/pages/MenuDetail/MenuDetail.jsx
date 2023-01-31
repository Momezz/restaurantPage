import { Link } from 'react-router-dom';
import './styles.css';

const MenuDetails = () => (
  <section className="menu-detail__container">
    <Link className="menu-detail__link" to="/"><ion-icon name="arrow-back-outline" /></Link>
    <div className="menu-detail__sub-cont">
      <img className="menu-detail__img" src="https://tse4.mm.bing.net/th?id=OIP.qxeWJ8vokM7ra-E6vSjTngHaFZ&pid=Api&P=0" alt="Imagen" />
      <div className="menu-details__desktop">
        <h1 className="menu-detail__title">title</h1>
        <p className="menu-detail__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore atque inventore possimus numquam officiis ratione sit nesciunt officia? Hic voluptate debitis corrupti molestias eaque sint iste sit dicta eos?</p>
        <div className="menu-detail__price">$35.000</div>
      </div>
    </div>
  </section>
);

export default MenuDetails;
