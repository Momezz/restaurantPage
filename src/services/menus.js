const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createMenu = async (menu) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(menu),
  };

  const res = await fetch(`${BASE_URL}/api/menus`, options);
  const result = await res.json();
  return result;
};

export const getMenus = async () => {
  const res = await fetch(`${BASE_URL}/api/menus`);
  const result = await res.json();
  return result;
};

export const deleteMenu = async (id) => {
  const options = {
    method: 'DELETE',
  };

  const res = await fetch(`${BASE_URL}/api/menus/${id}`, options);
  const result = await res.json();
  return result;
};

export const updateMenu = async (menu, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(menu),
  };

  const res = await fetch(`${BASE_URL}/api/menus/${id}`, options);
  const result = await res.json();
  return result;
};

export const addToCart = (cart) => cart.reduce((acc, obj) => {
  const repetNumber = cart.filter((item) => item.id === obj.id);
  const exist = acc.filter((item) => item.id === obj.id).length;
  if (!exist) {
    return [...acc, { ...obj, price: obj.price * repetNumber.length, repetNumber }];
  }
  return acc;
}, []);

export const formatPrice = (price) => {
  const formattedPrice = parseFloat(price).toFixed(2);
  const partes = formattedPrice.split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$ ${partes.join('.')}`;
};

export const createCategoryList = (menuList) => {
  const categoriesSet = new Set(menuList.map((item) => item.category));
  const uniqueCategory = [...categoriesSet];
  return uniqueCategory;
};
