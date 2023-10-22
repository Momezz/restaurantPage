import PropTypes from 'prop-types';
import './styles.css';

const PaymentResponse = ({ stateAction }) => (
  <article className="payment-response__container">
    {stateAction && typeof stateAction === 'boolean'
      ? <h2>Action carried out successfully</h2>
      : <p>Unsuccessful result, try again</p>}
  </article>
);

PaymentResponse.propTypes = {
  stateAction: PropTypes.bool.isRequired,
};

export default PaymentResponse;
