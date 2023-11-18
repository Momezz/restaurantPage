import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import createPayment from '../../services/payments';
import masterCard from '../../assets/mastercard_PNG14.png';
import americanExpress from '../../assets/americanexpress.png';
import visa from '../../assets/visa.png';
import cvc from '../../assets/cvc.png';
import PaymentResponse from '../PaymentResponse/PaymentResponse';
import { resetCart } from '../../features/shopping/shoppingSlice';
import './styles.css';

const PayNowForm = ({ totalPrice }) => {
  const [loading, setLoading] = useState(false);
  const [stateAction, setStateAction] = useState('');
  const [isCardNumberValid, setCardNumberValid] = useState(false);
  const [isCardExpiryValid, setCardExpiryValid] = useState(false);
  const [isCardCvcValid, setCardCvcValid] = useState(false);
  const dispatch = useDispatch();
  const elements = useElements();
  const stripe = useStripe();
  const handleChangeCardNumber = (event) => {
    setCardNumberValid(event.complete);
  };

  const handleChangeCardExpiry = (event) => {
    setCardExpiryValid(event.complete);
  };

  const handleChangeCardCvc = (event) => {
    setCardCvcValid(event.complete);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
    });

    const hanleOcultar = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };
    try {
      if (totalPrice) {
        const amount = Math.floor(totalPrice * 100);
        const paymentIntent = await createPayment(paymentMethod, amount, 'Home delivery');
        if (paymentIntent) {
          setStateAction(paymentIntent.message);
          hanleOcultar();
          if (paymentIntent.message === 'success') {
            dispatch(resetCart());
          }
        } else {
          setStateAction('Hubo un problema inesperado');
          hanleOcultar();
        }
        hanleOcultar();
      }
      return;
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section className="pay-now__cont-relative">
      <form className="pay-now__container" onSubmit={handleSubmit}>
        <p className="pay-now__card-number">Número de tarjeta</p>
        <div className="pay-now__cards pay-now__name-card">
          <div className="pay-now__input pay-now__no-borde">
            <CardNumberElement onChange={handleChangeCardNumber} />
          </div>
          <img className="pay-now__img" src={masterCard} alt="mastercard-img" />
          <img className="pay-now__img" src={americanExpress} alt="a-express-img" />
          <img className="pay-now__img" src={visa} alt="visa-card-img" />
        </div>
        <div>
          <div>
            <p className="pay-now__item">Month</p>
            <div className="pay-now__input pay-now__center  pay-now__name-card">
              <CardExpiryElement onChange={handleChangeCardExpiry} />
            </div>
          </div>
          <div>
            <p className="pay-now__item">Cvv</p>
            <div className="pay-now__cards">
              <div className="pay-now__input pay-now__flex pay-now__no-borde">
                <CardCvcElement onChange={handleChangeCardCvc} />
              </div>
              <img className="pay-now__cvv" src={cvc} alt="cvv-card" />
            </div>
          </div>
        </div>
        <div className="pay-now__btn-cont">
          {totalPrice ? (
            <button
              className="pay-now__btn-true pay-now__btn"
              type="submit"
              disabled={!isCardNumberValid || !isCardExpiryValid || !isCardCvcValid}
            >
              Pagar
            </button>
          ) : (
            <button className="pay-now__btn-false" type="submit">
              No has seleccionado ningún producto
            </button>
          )}
        </div>
      </form>
      <article className={loading ? 'pay-now__visible' : 'pay-now__hidden'}>
        <PaymentResponse stateAction={stateAction} />
      </article>
    </section>
  );
};

PayNowForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default PayNowForm;
