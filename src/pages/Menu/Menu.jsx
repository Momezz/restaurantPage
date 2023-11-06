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
  const [category, setCategory] = useState();
  useEffect(() => {
    const storedCategory = JSON.parse(localStorage.getItem('categorySelected'));
    dispatch(getMenus());
    setCategory(storedCategory);
  }, []);
  function handleCategoryChange(event) {
    setCategory(event.target.value);
    localStorage.setItem('categorySelected', JSON.stringify(event.target.value));
  }

  const role = convert(userLogin);
  const filteredProducts = menus.filter((product) => product.category === category);
  return (
    <section className="menu-page__container">
      <nav className="menu-page__nav">
        <NavigationBar />
      </nav>
      <article className="menu-page__sub-cont">
        <div className="menu-page__btn-container">
          <button className="menu-page__btn-option" type="submit" value="drinks" onClick={handleCategoryChange}>Bebidas</button>
          <button className="menu-page__btn-option" type="submit" value="meats" onClick={handleCategoryChange}>Carnes</button>
          <button className="menu-page__btn-option" type="submit" value="soups" onClick={handleCategoryChange}>Sopas</button>
          <button className="menu-page__btn-option" type="submit" value="pasta" onClick={handleCategoryChange}>Pastas</button>
          <button className="menu-page__btn-option" type="submit" value="desserts" onClick={handleCategoryChange}>Postres</button>
        </div>
        <h2 className={category === '' ? 'menu-page__title menu-page__title-height' : 'menu-page__title-none'}>Qué quieres comer hoy</h2>
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
