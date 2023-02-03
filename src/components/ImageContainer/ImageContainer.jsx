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
    <div className="image-container__container">
      {
        menus.map((menu) => (
          <HomeDishes menu={menu} />
        ))
      }
    </div>
  );
};
export default ImageContainer;
