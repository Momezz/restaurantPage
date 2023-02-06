import './styles.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { createImage } from '../../features/uploads/uploadsSlice';
import { createMenu, updateMenu } from '../../features/menus/menusSlice';

const ManagementForm = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const { form, handleChange } = useForm({});
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => { }, [uploads]);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

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

  const handleSubmitimage = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        dispatch(createImage(file));
      } catch (error) {
        throw new Error(error);
      }
    }
  };
  const handleClick = () => {
    document.getElementById('form-menu').reset();
  };
  return (
    <section className="forms__container">
      <div className="form-menu__img-container">
        <form
          id="form-menu"
          className="form-menu__img-form"
          onSubmit={handleSubmitimage}
        >
          <h2 className="management-form__image-text">Select Image</h2>
          <div className="management-form__file">
            <input
              type="file"
              name="imageProfile"
              accept="image/*"
              className="form-menu__imput-file"
              onChange={handleChangeImage}
            />
          </div>
          <button
            id="form-menu__img-button"
            className="management-form__btn"
            type="submit"
            onClick={handleClick}
          >
            Upload Image
          </button>
        </form>
        {uploads ? (
          <figure className="form-menu__img-preview">
            <img src={uploads} alt="" />
          </figure>
        ) : null}
      </div>
      <article className="management-form__container">
        <h2 className="management-form__title">Hello</h2>
        <form className="management-form__subcont" onSubmit={handleSubmit}>
          <select onChange={handleChange} className="management-form__select" name="category">
            <option className="management-form__option" value="entrees">Entrees</option>
            <option className="management-form__option" value="meats">Meats</option>
            <option className="management-form__option" value="soups">Soups</option>
            <option onChange={handleChange} className="management-form__option" value="pasta">Pasta</option>
            <option className="management-form__option" value="desserts">desserts</option>
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
            required
          /><br /><br />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="management-form__input management-form__textarea"
            required
          /><br /><br />
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="management-form__input"
            required
          /><br /><br />
          <input className="management-form__btn" type="submit" value="Done" />
        </form>
      </article>
    </section>
  );
};

export default ManagementForm;
