import './styles.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createImage } from '../../features/uploads/uploadsSlice';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';

const FormImage = () => {
  const [file, setFile] = useState([]);
  const { uploads } = useSelector((state) => state.upload);
  const userStorage = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch();

  useEffect(() => { }, [uploads]);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

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
    <div className="form-img__container">
      <form
        id="form-menu"
        className="form__img-form"
        onSubmit={handleSubmitimage}
      >
        <h2 className="form__img-title">Seleccionar imagen</h2>
        <div className="form__img-file">
          <div>
            {
              userStorage && userStorage.image
                ? <img className="edit-profile__editable-image" src={userStorage.image} alt="imagen" />
                : <img className="edit-profile__editable-image" src={profileDefault} alt="imagen por defecto" />
            }
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChangeImage}
          />
        </div>
        <button
          id="form-menu__img-button"
          className="form__img-btn"
          type="submit"
          disabled={!file || file.length === 0}
        >
          Cargar imagen
        </button>
      </form>
      {uploads ? (
        <figure className="form__preview-container">
          <img className="form__img-img-preview" src={uploads} alt="imagen a cargar" />
        </figure>
      ) : null}
    </div>
  );
};

export default FormImage;
