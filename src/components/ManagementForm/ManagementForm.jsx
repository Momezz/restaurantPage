import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { reset } from '../../features/uploads/uploadsSlice';
import { getMenu } from '../../services/menus';
import { createMenu, updateMenu } from '../../features/menus/menusSlice';
import FormImage from '../FormImage/FormImage';
import PaymentResponse from '../PaymentResponse/PaymentResponse';

const ManagementForm = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const [imageProfile, setImageProfile] = useState(uploads);
  const [loading, setLoading] = useState(false);
  const [stateAction, setStateAction] = useState('');
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const result = await getMenu(id);
      setData(result);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    if (uploads === '') {
      setImageProfile(data.image);
    } else {
      setImageProfile(uploads);
    }
  }, [uploads]);
  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);
  const resetValueLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const generateResponse = (res) => {
    if (typeof res.payload === 'string') {
      resetValueLoading();
      setStateAction('Se ha producido un error inesperado.');
    } else if (typeof res.payload === 'object') {
      setStateAction('Acción realizada exitosamente.');
      dispatch(reset());
      resetValueLoading();
      setTimeout(() => {
        navigate('/menu');
      }, 4000);
    } else {
      setStateAction('Se ha producido un error inesperado.');
      resetValueLoading();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        const response = await dispatch(updateMenu({ ...form, _id: id, image: imageProfile }));
        generateResponse(response);
      } else {
        const response = await dispatch(createMenu({ ...form, image: uploads }));
        generateResponse(response);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="forms__container">
      <div className="form-menu__img-container">
        <FormImage linkImage={id ? data.image : ''} />
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
        <article
          className={loading ? 'management-form__visible' : 'management-form__hidden'}
        >
          <PaymentResponse stateAction={stateAction} />
        </article>
      </article>
    </section>
  );
};

export default ManagementForm;
