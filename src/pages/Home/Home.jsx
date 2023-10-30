import './styles.css';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Footer from '../../components/Footer/Footer';

const Home = () => (
  <section className="home__container">
    <nav className="home__navigation">
      <NavigationBar />
    </nav>
    <article>
      <ImageCarousel />
    </article>
    <article className="home__image-container">
      <ImageContainer />
    </article>
    <article>
      <Footer />
    </article>
  </section>
);

export default Home;
