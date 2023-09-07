import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenus } from '../../features/menus/menusSlice';
import HomeDishes from '../HomeDishes/HomeDishes';

const ImageContainer = () => {
  const { menus } = useSelector((state) => state.menus);
  const desserts = menus.filter((item) => item.category === 'desserts');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus());
  }, []);
  return (
    <>
      <h2 className="image-container__title">Try our delicious desserts</h2>
      <div className="image-container__container">
        {
          desserts.map((menu) => (
            <li className="image-container__li" key={menu._id}>
              <HomeDishes menu={menu} />
            </li>
          ))
        }
      </div>
    </>
  );
};
export default ImageContainer;
