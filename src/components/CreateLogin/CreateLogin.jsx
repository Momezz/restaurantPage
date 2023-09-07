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
      .min(2, 'the name is too short')
      .max(35, 'the name is too long')
      .required('Obligatory field'),
    email: Yup
      .string()
      .email('invalid email')
      .required(),
    password: Yup
      .string()
      .required('password is required')
      .min(8, 'enter at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one capital letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)'),
    phone: Yup
      .string()
      .required('Obligatory field')
      .min(10, 'The number must have at least 10 characters'),
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
      <h2 className="create-login__title">Create Your Account</h2>
      {
        stateUser
          ? (
            <div className="create-login__success-cont">
              <h2 className="create-login__success-message">you created your account successfully</h2>
              <Link className="create-login__success-message" to="/login">Authenticate</Link>
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
          <h2 className="form__image-text">Select Image</h2>
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
