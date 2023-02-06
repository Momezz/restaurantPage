import './styles.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteMenu } from '../../features/menus/menusSlice';

const ConfirmDelete = ({ id }) => {
  const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();

  const handleDeleteMenu = async () => {
    try {
      dispatch(deleteMenu(id));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleCancel = () => {
    setDisplay(false);
  };

  return (
    <article className={display ? 'confirm-delete__container' : 'confirm-delete__container__none'}>
      <p className="confirm-delete__paragraph">Are you sure you want to delete this product?</p>
      <div className="confirm-delete__cont-bottons">
        <button onClick={handleDeleteMenu} className="confirm-delete__cont-botton" type="submit">yes</button>
        <button onClick={handleCancel} className="confirm-delete__cont-botton" type="submit">No</button>
      </div>
    </article>
  );
};

ConfirmDelete.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ConfirmDelete;
