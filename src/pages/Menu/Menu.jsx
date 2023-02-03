import './styles.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import MenuCard from '../../components/MenuCard/MenuCard';

const Menu = () => (
  <section className="menu-page__container">
    <nav className="menu-page__nav">
      <NavigationBar />
    </nav>
    <article className="menu-page__menu-card">
      <MenuCard />
    </article>
    <footer className="menu-page__footer">
      <Footer />
    </footer>
  </section>
);

export default Menu;
