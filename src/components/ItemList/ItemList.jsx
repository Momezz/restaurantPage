import PropTypes from 'prop-types';
import './styles.css';

const ItemList = ({ item }) => (
  <article className="item-list__container" key={item._id}>
    <p className="item-list__paragraph">
      A nombre de:
      <span className="item-list__highlight-text"> Salomon Rondon</span>
    </p>
    <p className="item-list__paragraph">27- Septiembre del 20.23 a las 08:00</p>
    <p className="item-list__paragraph">3 personas</p>
    <div className="item-list__nail item-list__top-left" />
    <div className="item-list__nail item-list__top-right" />
    <div className="item-list__nail item-list__bottom-left" />
    <div className="item-list__nail item-list__bottom-right" />
  </article>
);

ItemList.propTypes = {
  item: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ItemList;
