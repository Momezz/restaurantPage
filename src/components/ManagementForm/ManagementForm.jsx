import './styles.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { getMenu } from '../../services/menus';
import { createMenu, updateMenu } from '../../features/menus/menusSlice';
import FormImage from '../FormImage/FormImage';

const ManagementForm = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const getData = async () => {
    try {
      const result = await getMenu(id);
      setData(result);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        dispatch(updateMenu({ ...form, _id: id }));
      }
      if (uploads && id === undefined) {
        dispatch(createMenu({ ...form, image: uploads }));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="forms__container">
      <div className="form-menu__img-container">
        <FormImage />
        {uploads ? (
          <figure className="form-menu__img-preview">
            <img src={uploads} alt="" />
          </figure>
        ) : null}
      </div>
      <article className="management-form__container">
        <h2 className="management-form__title">Hello</h2>
        <form className="management-form__subcont" onSubmit={handleSubmit}>
          <select onChange={handleChange} className="management-form__select" required name="category" value={data.category}>
            <option className="management-form__option" value=""> </option>
            <option className="management-form__option" value="soups">Soups</option>
            <option className="management-form__option" value="meats">Meats</option>
            <option className="management-form__option" value="pasta">Pasta</option>
            <option className="management-form__option" value="desserts">Desserts</option>
            <option className="management-form__option" value="drinks">Drinks</option>
          </select>
          <br /><br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Food Name"
            onChange={handleChange}
            className="management-form__input"
            defaultValue={data !== '' ? data.name : ''}
            required
          /><br /><br />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="management-form__input management-form__textarea"
            defaultValue={data !== '' ? data.description : ''}
            required
          /><br /><br />
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="management-form__input"
            defaultValue={data !== '' ? data.price : ''}
            required
          /><br /><br />
          <input className="management-form__btn" type="submit" value="Done" />
        </form>
      </article>
    </section>
  );
};

export default ManagementForm;
