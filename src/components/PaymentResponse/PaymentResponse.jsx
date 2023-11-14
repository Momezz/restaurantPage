import PropTypes from 'prop-types';
import './styles.css';

const PaymentResponse = ({ stateAction }) => (
  <article className="payment-response__container">
    {stateAction && typeof stateAction === 'boolean'
      ? <h2>Acción realizada con éxito</h2>
      : <p>Resultado fallido, inténtalo de nuevo</p>}
  </article>
);

PaymentResponse.propTypes = {
  stateAction: PropTypes.bool.isRequired,
};

export default PaymentResponse;
