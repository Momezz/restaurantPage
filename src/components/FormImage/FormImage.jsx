import './styles.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { createImage, reset } from '../../features/uploads/uploadsSlice';
import profileDefault from '../../assets/imagesApp/profileDefault.jpg';

const FormImage = ({ linkImage }) => {
  const [file, setFile] = useState([]);
  const { uploads } = useSelector((state) => state.upload);
  const dispatch = useDispatch();

  useEffect(() => {}, [uploads]);
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
        dispatch(reset());
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
            {linkImage !== '' ? (
              <img
                className="edit-profile__editable-image"
                src={linkImage}
                alt="imagen"
              />
            ) : (
              <img
                className="edit-profile__editable-image"
                src={profileDefault}
                alt="imagen por defecto"
              />
            )}
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
        <figure className="form-menu__img-preview">
          <img src={uploads} alt="img-preview" />
        </figure>
      ) : null}
    </div>
  );
};

FormImage.propTypes = {
  linkImage: PropTypes.string.isRequired,
};

export default FormImage;
