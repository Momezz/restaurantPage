import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getPublications } from '../../services/publications';
import './styles.css';

const ImageCarousel = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [data, setData] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    setStart(0);
    setEnd(width <= 768 ? 1 : 2);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth, width]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getPublications();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  const handleNext = () => {
    if (end < data.length - 1) {
      setStart(start + 1);
      setEnd(end + 1);
    } else {
      setStart(0);
      setEnd(width <= 768 ? 1 : 2);
    }
  };

  const handleLast = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    } else {
      setStart(data.length - end);
      setEnd(data.length);
    }
  };

  let elements = {};
  try {
    if (!Array.isArray(data) || Object.keys(data).length === 0) {
      return;
    }
    elements = data.slice(start, end);
  } catch (error) {
    console.log(error);
  }

  // eslint-disable-next-line consistent-return
  return (
    <section className="image-carousel__container">
      <ul className="image-carousel__ul">
        <button
          className="image-carousel__btn image-carousel__btn-right"
          onClick={handleNext}
          type="button"
        >
          <ion-icon name="caret-back-outline" />
        </button>
        {elements.map((element) => (
          <li className="image-carousel__li" key={element._id}>
            <div className="image-carousel__container_left">
              <img
                className="image-carousel__img"
                src={element.image}
                alt="imagen-publication"
              />
              <p className="image-carousel__date">
                <span className="image-carousel__paragraph">Fecha de publicación:</span>
                {format(new Date(element.createdAt), "d 'de' MMM 'del' yyyy")}
              </p>
            </div>
            <div className="image-carousel__right">
              <h3 className="image-carousel__title">
                {element.publicationTitle}
              </h3>
              <p className="image-carousel__paragraph">{element.description}</p>
            </div>
          </li>
        ))}
        <button
          className="image-carousel__btn image-carousel__btn-left"
          onClick={handleLast}
          type="button"
        >
          <ion-icon name="caret-forward-outline" />
        </button>
      </ul>
    </section>
  );
};

export default ImageCarousel;
