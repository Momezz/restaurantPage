import { Link } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMenus } from '../../features/menus/menusSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import MenuCard from '../../components/MenuCard/MenuCard';
import { convert } from '../../services/auth';

const Menu = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login.user.user);

  const { menus } = useSelector((state) => state.menus);
  const [category, setCategory] = useState('meats');
  useEffect(() => {
    dispatch(getMenus());
    setCategory(category);
  }, []);
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const role = convert(userLogin);
  const filteredProducts = menus.filter((product) => product.category === category);
  return (
    <section className="menu-page__container">
      <nav className="menu-page__nav">
        <NavigationBar />
      </nav>
      <article className="menu-page__sub-cont">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="menu-page__select"
        >
          <option value="drinks">Drinks</option>
          <option value="meats">Meats</option>
          <option value="soups">Soups</option>
          <option value="pasta">Pasta</option>
          <option value="desserts">Desserts</option>
        </select>
        <h2 className="menu-page__title">{category}</h2>
        <ul className="menu-page__products">
          {filteredProducts.map((product) => (
            <li key={product._id}>
              <MenuCard product={product} />
            </li>
          ))}
        </ul>
        <div className="menu-page__link-cont">
          <Link className="menu-page__link" to="/manage-conten"><ion-icon name="restaurant-outline" /></Link>
          <div className={!role ? 'menu-page__link-layer' : null}> </div>
        </div>
      </article>
      <footer className="menu-page__footer">
        <Footer />
      </footer>
    </section>
  );
};

export default Menu;
