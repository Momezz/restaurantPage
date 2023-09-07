const BASE_URL = process.env.REACT_APP_BASE_URL;

const createPayment = async (paymentMethod, amount, description) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentMethod,
      amount,
      description,
    }),
  };

  const res = await fetch(`${BASE_URL}/api/payments`, options);
  const result = await res.json();
  return result;
};

export default createPayment;
