import { useState } from 'react';
import './styles.css';

const HomeDiches = () => {
  const [display, setDisplay] = useState(false);
  const handleSetTrue = () => {
    setDisplay(true);
  };
  const handleSetFalse = () => {
    setDisplay(false);
  };

  return (
    <div
      className="home-dishes__container"
      onMouseEnter={handleSetTrue}
      onMouseLeave={handleSetFalse}
    >
      <img className="home-dishes__img" src="https://tse4.mm.bing.net/th?id=OIP.qxeWJ8vokM7ra-E6vSjTngHaFZ&pid=Api&P=0" alt="Imagen" />
      <div className={display ? 'home-dishes__text' : 'home-dishes__none'}>
        <h2>title</h2>
        <p className="home-dishes__paragraph">Aqui descripcion</p>
        <span className="home-dishes__price">$35.000</span>
      </div>
    </div>
  );
};

export default HomeDiches;
