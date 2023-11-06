import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import MenuDetails from './pages/MenuDetail/MenuDetail';
import Bookings from './pages/Bookings/Bookings';
import FormLogin from './pages/FormLogin/FormLogin';
import SignUp from './pages/SignUp/SignUp';
import ManageContent from './pages/ManageContent/ManageContent';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import Profile from './pages/Profile/Profile';

const App = () => {
  useEffect(() => {
    document.title = 'Restaurant';
  }, []);
  return (
    <Routes>
      <Route path="/details/:id" element={<MenuDetails />} />
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/:id" element={<SignUp />} />
      <Route path="/manage-conten" element={<ManageContent />} />
      <Route path="/manage-conten/:id" element={<ManageContent />} />
      <Route path="/cart" element={<ShoppingPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};

export default App;
