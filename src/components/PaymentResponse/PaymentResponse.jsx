import PropTypes from 'prop-types';
import './styles.css';

const PaymentResponse = ({ stateAction }) => (
  <article className="payment-response__container">
    {stateAction
      ? <p>{stateAction}</p>
      : <h2>Hubo un problema inesperado</h2>}
  </article>
);

PaymentResponse.propTypes = {
  stateAction: PropTypes.string.isRequired,
};

export default PaymentResponse;
