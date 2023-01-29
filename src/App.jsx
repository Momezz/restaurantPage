/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home/Home';

const App = () => {
  useEffect(() => {
    document.title = 'Restauran Page';
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
};

export default App;
