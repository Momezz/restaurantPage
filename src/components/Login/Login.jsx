import './styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../services/auth';
import useForm from '../../hooks/useForm';

const Login = () => {
  const [result, setResult] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const { form, handleChange } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(login(form));
      if (typeof response.payload.message === 'string') {
        setResult(response.payload.message);
      } else if (typeof response.payload === 'object') {
        setResult('Credentials entered successfully');
        setTimeout(() => {
          navigate('/');
        }, 4000);
      } else {
        setResult('An unexpected error has occurred');
      }
    } catch (error) {
      throw new Error(error);
    }
    handleLogin();
  };
  return (
    <article className="login__container">
      <div className={showMessage ? 'login__message' : 'login__message-display-none'}>
        <p className="login__message-paragraph">
          {result}
        </p>
      </div>
      <h2 className="login__title">Hello, Sign in</h2>
      <form className="login__subcont" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input className="login__btn" type="submit" value="Sign in" />
      </form>
    </article>
  );
};

export default Login;
