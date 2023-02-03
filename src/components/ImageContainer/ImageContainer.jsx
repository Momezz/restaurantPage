import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenus } from '../../features/menus/menusSlice';
import HomeDishes from '../HomeDishes/HomeDishes';

const ImageContainer = () => {
  const { menus } = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus());
  }, []);
  return (
    menus.map((menu) => (
      <section key={menu._id} className="image-container__container">
        <div className="image-container__container">
          <HomeDishes menu={menu} />
        </div>
      </section>
    ))
  );
};
export default ImageContainer;
