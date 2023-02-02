import './styles.css';
import useForm from '../../hooks/useForm';

const Login = () => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(form);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <article className="login__container">
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
          type="text"
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
