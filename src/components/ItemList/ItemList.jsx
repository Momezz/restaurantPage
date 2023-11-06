import PropTypes from 'prop-types';
import './styles.css';

const ItemList = ({ item }) => {
  const dateString = item.reservationDate;
  let formattedDate = '';
  try {
    const originalDate = new Date(dateString);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(originalDate)) {
      const opcionesDeFormato = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      formattedDate = originalDate.toLocaleDateString('es-ES', opcionesDeFormato);
    } else {
      formattedDate = 'For now the date is not available';
    }
  } catch (error) {
    console.error('An error occurred while processing the date:', error);
  }

  return (
    <article className="item-list__container">
      <p className="item-list__paragraph">
        A nombre de
        <span className="item-list__highlight-text"> {item.name}. </span>
        El dia {formattedDate} a las {item.reservationTime}, mesa para{' '}
        {item.numberPeople} personas
      </p>
      <div className="item-list__nail item-list__top-left" />
      <div className="item-list__nail item-list__top-right" />
      <div className="item-list__nail item-list__bottom-left" />
      <div className="item-list__nail item-list__bottom-right" />
    </article>
  );
};

ItemList.propTypes = {
  item: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ItemList;
