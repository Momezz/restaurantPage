/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';

const ImageCarousel = ({ imagenes }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === imagenes.length - 1 ? 0 : currentImage + 1);
  };

  const lastImage = () => {
    setCurrentImage(currentImage === 0 ? imagenes.length - 1 : currentImage - 1);
  };
  if (!Array.isArray(imagenes) || imagenes.length === 0) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return (
    <div className="image-carousel__container">
      <button className="image-carousel__btn" onClick={lastImage} type="button">
        <ion-icon name="caret-back-outline" />
      </button>
      {
        imagenes.map((imagen, index) => (
          <div className="image-carousel__images" key={index}>
            {
              currentImage === index && (
                <img className="image-carousel__img" key={index} src={imagen} alt="imagen" />
              )
            }
          </div>
        ))
}
      <button className="image-carousel__btn" onClick={nextImage} type="button">
        <ion-icon name="caret-forward-outline" />
      </button>
    </div>
  );
};

ImageCarousel.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default ImageCarousel;
