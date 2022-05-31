import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/home/Home';
import Perros from './pages/perros/Perros';
import Error404 from './pages/error404/Error404';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/perros' element={<Perros/>}></Route>

    <Route path='*' element={<Error404 />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
  </Routes>
  </BrowserRouter>
);
