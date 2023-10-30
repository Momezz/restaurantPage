const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPublications = async () => {
  const res = await fetch(`${BASE_URL}/api/publications`);
  const result = await res.json();
  return result;
};

export const createPublication = async (publication) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(publication),
  };
  const res = await fetch(`${BASE_URL}/api/publications`, options);
  const result = await res.json();
  return result;
};
