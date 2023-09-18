import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenuById } from '../../features/menus/menusSlice';
import { formatPrice } from '../../services/menus';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './styles.css';

const MenuDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { menus } = useSelector((state) => state.menus);
  const data = menus.filter((menu) => menu._id === id);
  useEffect(() => {
    dispatch(getMenuById(id));
  }, []);
  const handleBack = () => {
    navigate(-1);
  };
  const item = {
    id: data[0]._id,
    name: data[0].name,
    price: data[0].price,
  };
  return (
    <section className="menu-detail__container">
      <button type="button" onClick={handleBack} className="menu-detail__link">
        <ion-icon name="arrow-back-outline" />
      </button>
      <div className="menu-detail__sub-cont">
        <div className="menu-detail__img-cont">
          <div className="menu-detail__shopping-cart">
            <ShoppingCart item={item} />
          </div>
          <img className="menu-detail__img" src={data[0].image} alt="Imagen" />
        </div>
        <div className="menu-details__desktop">
          <h1 className="menu-detail__title">{data[0].name}</h1>
          <p className="menu-detail__description">{data[0].description}</p>
          <div className="menu-detail__price">{formatPrice(data[0].price)}</div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;
