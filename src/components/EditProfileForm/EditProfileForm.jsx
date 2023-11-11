import './styles.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { createImage } from '../../features/uploads/uploadsSlice';
import { updateUser } from '../../features/users/usersSlice';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';

const EditProfileForm = () => {
  const { id } = useParams();
  const { uploads } = useSelector((state) => state.upload);
  const [file, setFile] = useState('');
  const [imageProfile, setImageProfile] = useState(uploads);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  let formik = '';

  useEffect(() => {
    formik.setValues({
      image: imageProfile || '',
      name: userStorage.name || '',
      email: userStorage.email || '',
      phone: userStorage.phone || '',
    });
  }, []);

  useEffect(() => {
    if (uploads === '') {
      setImageProfile(userStorage.image);
    } else {
      setImageProfile(uploads);
    }
  }, [uploads]);
  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
    setButtonDisabled(false);
  };

  const handleClick = () => {
    document.getElementById('form-menu').reset();
  };

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, 'El nombre es muy corto')
      .max(35, 'El nombre es muy largo')
      .required('Obligatory field'),
    email: Yup
      .string()
      .email('Email inválido')
      .required('Obligatory field'),
    phone: Yup
      .string()
      .min(10, 'El número debe tener al menos 10 caracteres.')
      .required('Obligatory field'),
    image: Yup
      .string(),
  });
  formik = useFormik({
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
          dispatch(updateUser({ ...values, image: imageProfile, _id: id }));
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
    <article className="edit-profile__container">
      <h2 className="edit-profile__title">Edita tu perfil</h2>
      <div className="edit-profile__img-container">
        <form
          id="form-menu"
          className="edit-profile__img-form"
          onSubmit={handleSubmitimage}
        >
          <h2 className="edit-profile__image-text">Seleccionar imagen</h2>
          <div className="edit-profile__file">
            <div className="edit-profile__editable-image">
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
              onChange={handleChangeImage}
            />
          </div>
          <div className="edit-profile__cont">
            <button
              id="form-menu__img-button"
              className="edit-profile__btn"
              type="submit"
              onClick={handleClick}
              disabled={isButtonDisabled}
            >
              Cargar imagen
            </button>
          </div>
        </form>
        {uploads ? (
          <figure className="edit-profile__cont">
            <img className="edit-profile__img-preview" src={uploads} alt="Imagen de perfil" />
          </figure>
        ) : null}
      </div>
      <form className="edit-profile__subcont" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="edit-profile__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.name}
        />
        <div className="edit-profile__error">{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="edit-profile__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.email}
        />
        <div className="edit-profile__error">{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</div>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="edit-profile__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.phone}
        />
        <div className="edit-profile__error">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</div>
        <div className="edit-profile__cont">
          <input className="edit-profile__btn-inf" type="submit" value="Editar" />
        </div>
      </form>
    </article>
  );
};

export default EditProfileForm;
