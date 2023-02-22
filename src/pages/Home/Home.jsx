import './styles.css';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const mockImagenes = [
    'https://tse2.mm.bing.net/th?id=OIP.Eo--SbCP_SETgkjBdN1a_AHaE8&pid=Api&P=0',
    'https://tse3.mm.bing.net/th?id=OIP.8lYeWwGhca1UbU4Gq2HbKQHaE8&pid=Api&P=0',
    'https://tse3.mm.bing.net/th?id=OIP.c4WUdi0bm4th7x3nET7XvwHaE8&pid=Api&P=0',
  ];
  return (
    <section className="home__container">
      <nav className="home__navigation">
        <NavigationBar />
      </nav>
      <section className="home__map-carousel">
        <article className="home__map-sub-cont">
          <ImageCarousel imagenes={mockImagenes} />
        </article>
        <div className="home__container-map">
          <iframe
            title="uniqueTitle"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Nuevayork&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </section>
      <article>
        <ImageContainer />
      </article>
      <article>
        <Footer />
      </article>
    </section>
  );
};

export default Home;
