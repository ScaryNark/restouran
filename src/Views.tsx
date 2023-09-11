import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout/Layout';
import Home from './layout/Home/Home';
import Menu from './layout/Menu/Menu';
import Description from './layout/Description/Description';
import Block from './layout/Block/Block';
import Basket from './layout/Basket/Basket';

const Views = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='menu/description/:id' element={<Description />} />
                    <Route path='block' element={<Block />} />
                    <Route path='menu/basket' element={<Basket />} />
                </Route>
            </Routes>
        </>
    );
};

export default Views;