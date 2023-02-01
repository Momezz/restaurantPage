import './styles.css';
import HomeDiches from '../HomeDishes/HomeDishes';

const ImageContainer = () => {
  const values = {
    title: 'plato1',
    description: 'las mejores pltos del pais',
    price: '34564',
  };
  console.log(values);
  return (
    <section className="image-container__container">
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
      <HomeDiches />
    </section>
  );
};
export default ImageContainer;
