import './styles.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { reset } from '../../features/uploads/uploadsSlice';
import FormImage from '../FormImage/FormImage';
import { createUser } from '../../services/users';

const CreateLogin = () => {
  const [result, setResult] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const { uploads } = useSelector((state) => state.upload);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  });

  const handleCreateLogin = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(createUser({ ...values, image: uploads }));
        if (typeof response.payload === 'string') {
          setResult(`Ya existe el usuario ${values.email}`);
        } else if (typeof response.payload === 'object') {
          setResult('Usuario creado exitosamente');
          dispatch(reset());
          setTimeout(() => {
            navigate('/login');
          }, 4000);
        } else {
          setResult('Error desconocido al crear el usuario');
        }
      } catch (error) {
        setResult('Error desconocido al crear el usuario');
      }
      handleCreateLogin();
    },
  });

  return (
    <article className="create-login__container">
      <div className={showMessage ? 'create-login__message' : 'create-login__message-display-none'}>
        <p className="create-login__message-paragraph">
          {result}
        </p>
      </div>
      <h2 className="create-login__title">Crea tu cuenta</h2>
      <FormImage />
      <form className="create-login__subcont" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
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
          placeholder="Correo electrónico"
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
          placeholder="Contraseña"
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
          placeholder="Teléfono"
          className="create-login__input"
          onChange={formik.handleChange}
          required
        />
        <div className="create-login__error">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</div>
        <br /><br />
        <input className="create-login__btn" type="submit" value="Crear usuario" />
      </form>
    </article>
  );
};

export default CreateLogin;
