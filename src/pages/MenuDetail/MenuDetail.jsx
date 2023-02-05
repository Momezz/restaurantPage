import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenuById } from '../../features/menus/menusSlice';
import './styles.css';

const MenuDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { menus } = useSelector((state) => state.menus);
  const data = menus.filter((menu) => menu._id === id);
  useEffect(() => {
    dispatch(getMenuById(id));
  }, []);

  return (
    <section className="menu-detail__container">
      <Link className="menu-detail__link" to="/menu"><ion-icon name="arrow-back-outline" /></Link>
      <div className="menu-detail__sub-cont">
        <img className="menu-detail__img" src={data[0].image} alt="Imagen" />
        <div className="menu-details__desktop">
          <h1 className="menu-detail__title">{data[0].name}</h1>
          <p className="menu-detail__description">{data[0].description}</p>
          <div className="menu-detail__price">${data[0].price}</div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;
