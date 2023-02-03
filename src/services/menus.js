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
