import PropTypes from 'prop-types';
import './styles.css';

const PaymentResponse = ({ statePayment }) => (
  <article className="payment-response__container">
    {statePayment && typeof statePayment === 'boolean'
      ? <h2>Payment made successfully, Thanks for your purchase</h2>
      : <p>We have problems with your payment. Please check the data entered</p>}
  </article>
);

PaymentResponse.propTypes = {
  statePayment: PropTypes.bool.isRequired,
};

export default PaymentResponse;
