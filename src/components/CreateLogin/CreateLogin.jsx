import './styles.css';
import useForm from '../../hooks/useForm';

const CreateLogin = () => {
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
    <article className="create-login__container">
      <h2 className="create-login__title">Create Your Account</h2>
      <form className="create-login__subcont" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="create-login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="create-login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          className="create-login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="create-login__input"
          onChange={handleChange}
          required
        /><br /><br />
        <input className="create-login__btn" type="submit" value="Sign up" />
      </form>
    </article>
  );
};

export default CreateLogin;
