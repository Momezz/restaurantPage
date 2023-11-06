import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import createPayment from '../../services/payments';
import masterCard from '../../assets/mastercard_PNG14.png';
import americanExpress from '../../assets/americanexpress.png';
import visa from '../../assets/visa.png';
import cvc from '../../assets/cvc.png';
import PaymentResponse from '../PaymentResponse/PaymentResponse';
import './styles.css';

const PayNowForm = ({ totalPrice }) => {
  const [loading, setLoading] = useState(false);
  const [stateAction, setStateAction] = useState(false);
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
    });

    try {
      if (totalPrice) {
        const amount = Math.floor(totalPrice * 100);
        createPayment(paymentMethod, amount, 'Home delivery');
        if (paymentMethod === undefined) {
          setLoading(true);
          return;
        }
        setLoading(true);
        setStateAction(true);
      }
      return;
    } catch (error) {
      throw new Error(error);
    }
  };
  const hanleOcultar = () => {
    setLoading(false);
  };
  return (
    <section className="pay-now__cont-relative">
      <form className="pay-now__container" onSubmit={handleSubmit}>
        <botton className={loading ? 'pay-now__close' : 'pay-now__hidden'} type="submit" onClick={hanleOcultar}>X</botton>
        <p className="pay-now__card-number">Número de tarjeta</p>
        <div className="pay-now__cards pay-now__name-card">
          <div className="pay-now__input pay-now__no-borde"><CardNumberElement /></div>
          <img className="pay-now__img" src={masterCard} alt="mastercard-img" />
          <img className="pay-now__img" src={americanExpress} alt="a-express-img" />
          <img className="pay-now__img" src={visa} alt="visa-card-img" />
        </div>
        <div className="pay-now__date">
          <div>
            <p className="pay-now__item">Month</p>
            <div className="pay-now__input pay-now__center  pay-now__name-card"><CardExpiryElement /></div>
          </div>
          <div>
            <p className="pay-now__item">Cvv</p>
            <div className="pay-now__cards  lineal">
              <div className="pay-now__input pay-now__flex pay-now__no-borde"><CardCvcElement /></div>
              <img className="pay-now__cvv" src={cvc} alt="cvv-card" />
            </div>
          </div>
        </div>
        <div className="pay-now__btn-cont">
          {
            totalPrice
              ? <button className="pay-now__btn-true pay-now__btn" type="submit">Pagar</button>
              : <button className="pay-now__btn-false" type="submit">No has seleccionado ningún producto</button>
          }
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
