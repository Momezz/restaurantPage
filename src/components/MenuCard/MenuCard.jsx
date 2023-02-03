import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenus } from '../../features/menus/menusSlice';
import './styles.css';

const MenuCard = () => {
  const { menus } = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus());
  }, []);
  return (
    menus.map((menu) => (
      <article className="menu-card__container" key={menu._id}>
        <div className="menu-card__table">
          <div className="menu-card__tr">
            <h2 className="menu-card__td-title menu-card__td">{menu.name}</h2>
            <p className="menu-card__td">{menu.description}</p>
            <span className="menu-card__td">{menu.price}</span>
          </div>
          <hr className="menu-card__hr" />
        </div>
        <div className="menu-card__link-cont">
          <Link className="menu-card__link" to="/manage-conten"><ion-icon name="restaurant-outline" /></Link>
        </div>
      </article>
    ))
  );
};

export default MenuCard;
