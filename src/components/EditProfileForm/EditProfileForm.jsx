import './styles.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { reset } from '../../features/uploads/uploadsSlice';
import { updateUser } from '../../features/users/usersSlice';
import PaymentResponse from '../PaymentResponse/PaymentResponse';
import FormImage from '../FormImage/FormImage';

const EditProfileForm = () => {
  const { uploads } = useSelector((state) => state.upload);
  const [imageProfile, setImageProfile] = useState(uploads);
  const [loading, setLoading] = useState(false);
  const [stateAction, setStateAction] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  let formik = '';

  useEffect(() => {
    formik.setValues({
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
  }, []);

  const resetValueLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'El nombre es muy corto')
      .max(35, 'El nombre es muy largo')
      .required('Campo obligatorio'),
    email: Yup.string().email('Email inválido').required('Campo obligatorio'),
    phone: Yup.string()
      .min(10, 'El número debe tener al menos 10 caracteres.')
      .required('Campo obligatorio'),
  });
  formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema,
    validateOnMount: false,
    onSubmit: async (values) => {
      try {
        if (id) {
          const response = await dispatch(
            updateUser({ ...values, image: imageProfile, _id: id }),
          );
          if (typeof response.payload === 'string') {
            resetValueLoading();
            setStateAction('Se ha producido un error inesperado.');
          } else if (typeof response.payload === 'object') {
            setStateAction('Cambios aplicados exitosamente.');
            resetValueLoading();
            dispatch(reset());
            setTimeout(() => {
              navigate('/profile');
            }, 4000);
          } else {
            setStateAction('Se ha producido un error inesperado.');
            resetValueLoading();
          }
        }
      } catch (error) {
        setStateAction('Se ha producido un error inesperado.');
        throw new Error(error);
      }
    },
  });

  return (
    <article className="edit-profile__container">
      <h2 className="edit-profile__title">Edita tu perfil</h2>
      <FormImage linkImage={imageProfile !== '' ? imageProfile : ''} />
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
        <div className="edit-profile__error">
          {formik.errors.name && formik.touched.name ? formik.errors.name : ''}
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="edit-profile__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.email}
        />
        <div className="edit-profile__error">
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : ''}
        </div>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="edit-profile__input"
          onChange={formik.handleChange}
          defaultValue={userStorage.phone}
        />
        <div className="edit-profile__error">
          {formik.errors.phone && formik.touched.phone
            ? formik.errors.phone
            : ''}
        </div>
        <div className="edit-profile__cont">
          <input
            className="edit-profile__btn-inf"
            type="submit"
            value="Editar"
          />
        </div>
      </form>
      <article
        className={loading ? 'edit-profile__visible' : 'edit-profile__hidden'}
      >
        <PaymentResponse stateAction={stateAction} />
      </article>
    </article>
  );
};

export default EditProfileForm;
