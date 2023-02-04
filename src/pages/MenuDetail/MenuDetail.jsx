import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenuById } from '../../features/menus/menusSlice';
import './styles.css';

const MenuDetails = () => {
  const { id } = useParams();
  const { menus } = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuById(id));
  }, []);
  return (
    <section className="menu-detail__container">
      <Link className="menu-detail__link" to="/menu"><ion-icon name="arrow-back-outline" /></Link>
      <div className="menu-detail__sub-cont">
        <img className="menu-detail__img" src="https://tse4.mm.bing.net/th?id=OIP.qxeWJ8vokM7ra-E6vSjTngHaFZ&pid=Api&P=0" alt="Imagen" />
        <div className="menu-details__desktop">
          <h1 className="menu-detail__title">{menus.name}</h1>
          <p className="menu-detail__description">{menus.description}</p>
          <div className="menu-detail__price">${menus.price}</div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;
