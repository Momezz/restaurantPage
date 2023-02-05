import './styles.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import MenuCard from '../../components/MenuCard/MenuCard';
import { getMenus } from '../../features/menus/menusSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const { menus } = useSelector((state) => state.menus);
  const [category, setCategory] = useState('meats');
  useEffect(() => {
    dispatch(getMenus());
    setCategory(category);
  }, []);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const filteredProducts = menus.filter((product) => product.category === category);
  return (
    <section className="menu-page__container">
      <nav className="menu-page__nav">
        <NavigationBar />
      </nav>
      <article>
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
      </article>
      <footer className="menu-page__footer">
        <Footer />
      </footer>
    </section>
  );
};

export default Menu;
