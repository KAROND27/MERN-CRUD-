import React from 'react';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Edit from './components/Edit';

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/all' element={<AllUsers />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
