import './styles.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { createImage } from '../../features/uploads/uploadsSlice';
import { createUser } from '../../services/users';
import { updateUser } from '../../features/users/usersSlice';

const CreateLogin = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const [file, setFile] = useState([]);
  const [stateUser, setStateUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => { }, [uploads]);
  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };
  const handleClick = () => {
    document.getElementById('form-menu').reset();
  };

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, 'El nombre es muy corto')
      .max(35, 'El nombre es muy largo')
      .required('Campo obligatorio'),
    email: Yup
      .string()
      .email('Email inválido')
      .required(),
    password: Yup
      .string()
      .required('Se requiere contraseña')
      .min(8, 'Introduzca al menos 8 caracteres')
      .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
      .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
      .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
      .matches(/[@$!%*?&]/, 'La contraseña debe contener al menos un carácter especial (@$!%*?&)'),
    phone: Yup
      .string()
      .required('Campo obligatorio')
      .min(10, 'El número debe tener al menos 10 caracteres.'),
    image: Yup
      .string(),
  });
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        if (id) {
          dispatch(updateUser({ ...values, _id: id }));
        }
        if (values && uploads && id === undefined) {
          dispatch(createUser({ ...values, image: uploads }));
          setStateUser(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  });

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
      <h2 className="create-login__title">Crea tu cuenta</h2>
      {
        stateUser
          ? (
            <div className="create-login__success-cont">
              <h2 className="create-login__success-message">Creaste tu cuenta exitosamente</h2>
              <Link className="create-login__success-message" to="/login">Autenticar</Link>
            </div>
          )
          : ''
      }
      <div className="form__img-container">
        <form
          id="form-menu"
          className="form__img-form"
          onSubmit={handleSubmitimage}
        >
          <h2 className="form__image-text">Seleccionar imagen</h2>
          <div className="form__file">
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
          >
            Upload Image
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
          required
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
          required
        />
        <div className="create-login__error">{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</div>
        <br /><br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          className="create-login__input"
          onChange={formik.handleChange}
          required
        />
        <div className="create-login__error">{formik.errors.password && formik.touched.password ? formik.errors.password : ''}</div>
        <br /><br />
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="create-login__input"
          onChange={formik.handleChange}
          required
        />
        <div className="create-login__error">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</div>
        <br /><br />
        <input className="create-login__btn" type="submit" value="Sign up" />
      </form>
    </article>
  );
};

export default CreateLogin;
