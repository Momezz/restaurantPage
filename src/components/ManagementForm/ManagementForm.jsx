import './styles.css';
import useForm from '../../hooks/useForm';

const ManagementForm = () => {
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
    <article className="management-form__container">
      <h2 className="management-form__title">Hello</h2>
      <form className="management-form__subcont" onSubmit={handleSubmit}>
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
        <span className="management-form__image-text">Image</span>
        <div className="management-form__file">
          <input
            type="file"
            id="time"
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
        </div>
        <br /><br />

        <input className="management-form__btn" type="submit" value="Done" />
      </form>
    </article>
  );
};

export default ManagementForm;
