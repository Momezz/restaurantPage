import './styles.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import MenuCard from '../../components/MenuCard/MenuCard';

const Menu = () => (
  <section className="menu-page__container">
    <NavigationBar />
    <MenuCard />
    <Footer />
  </section>
);

export default Menu;
