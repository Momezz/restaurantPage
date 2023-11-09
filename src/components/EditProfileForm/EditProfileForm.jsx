import './styles.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { createImage } from '../../features/uploads/uploadsSlice';
import { createUser } from '../../services/users';
import { updateUser } from '../../features/users/usersSlice';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';

const EditProfileForm = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const [file, setFile] = useState([]);
  const [setStateUser] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  console.log('user', userStorage);

  useEffect(() => {
    setFile(userStorage.image);
  }, []);
  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    if (image !== '') {
      setFile(image);
    } else {
      setFile(userStorage.image);
    }
    setButtonDisabled(false);
  };
  const handleClick = () => {
    document.getElementById('form-menu').reset();
  };

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, 'El nombre es muy corto')
      .max(35, 'El nombre es muy largo'),
    email: Yup
      .string()
      .email('Email inválido'),
    phone: Yup
      .string()
      .min(10, 'El número debe tener al menos 10 caracteres.'),
    image: Yup
      .string(),
  });
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      email: '',
      phone: '',
    },
    validationSchema,
    validateOnMount: false,
    onSubmit: (values) => {
      try {
        if (id) {
          dispatch(updateUser({ ...values, image: file, _id: id }));
        }
        if (values && uploads && id === undefined) {
          dispatch(createUser({ ...values, image: file }));
          setStateUser(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  });
  useEffect(() => {
    formik.setValues({
      image: userStorage.image || '',
      name: userStorage.name || '',
      email: userStorage.email || '',
      phone: userStorage.phone || '',
    });
  }, []);

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

  return (
    <article className="create-login__container">
      <h2 className="create-login__title">Edita tu perfil</h2>
      <div className="form__img-container">
        <form
          id="form-menu"
          className="form__img-form"
          onSubmit={handleSubmitimage}
        >
          <h2 className="form__image-text">Seleccionar imagen</h2>
          <div className="form__file">
            <div className="form__editable-image">
              {
                userStorage.image
                  ? <img src={userStorage.image} alt="imagen" />
                  : <img src={profileDefault} alt="imagen por defecto" />
              }
            </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-menu__imput-file"
              onChange={handleChangeImage}
            />
          </div>
          <button
            id="form-menu__img-button"
            className="form__btn"
            type="submit"
            onClick={handleClick}
            disabled={isButtonDisabled}
          >
            Cargar imagen
          </button>
        </form>
        {uploads ? (
          <figure className="form-menu__cont">
            <img className="form-menu__img-preview" src={uploads} alt="" />
          </figure>
        ) : null}
      </div>
      <form className="create-login__subcont" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="create-login__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.name}
        />
        <div className="create-login__error">{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</div>
        <br /><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="create-login__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.email}
        />
        <div className="create-login__error">{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</div>
        <br /><br />
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="create-login__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.phone}
        />
        <div className="create-login__error">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</div>
        <br /><br />
        <input className="create-login__btn" type="submit" value="Editar" />
      </form>
    </article>
  );
};

export default EditProfileForm;
