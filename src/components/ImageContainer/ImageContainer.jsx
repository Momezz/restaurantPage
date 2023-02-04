import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenus } from '../../features/menus/menusSlice';
import HomeDishes from '../HomeDishes/HomeDishes';

const ImageContainer = () => {
  const { menus } = useSelector((state) => state.menus);
  const drinks = menus.filter((item) => item.category === 'drinks');
  const entrees = menus.filter((item) => item.category === 'entrees');
  const meats = menus.filter((item) => item.category === 'meats');
  const soups = menus.filter((item) => item.category === 'soups');
  const pasta = menus.filter((item) => item.category === 'pasta');
  const desserts = menus.filter((item) => item.category === 'desserts');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus());
  }, []);
  return (
    <>
      <h2>Drinks</h2>
      <div className="image-container__container">
        {
          drinks.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
      <h2>Entrees</h2>
      <div className="image-container__container">
        {
          entrees.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
      <h2>Meats</h2>
      <div className="image-container__container">
        {
          meats.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
      <h2>Soups</h2>
      <div className="image-container__container">
        {
          soups.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
      <h2>Pasta</h2>
      <div className="image-container__container">
        {
          pasta.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
      <h2>Desserts</h2>
      <div className="image-container__container">
        {
          desserts.map((menu) => (
            <li key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
    </>
  );
};
export default ImageContainer;
