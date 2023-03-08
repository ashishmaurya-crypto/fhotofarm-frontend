import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../component/Login/Login';
import Signup from '../component/Login/Signup';
import NotFound from '../component/404/404';
import Dashboard from '../component/Dashboard/Dashboard';
import Profile from '../component/Profile/Profile';
import Layout from '../component/Layout/Layout';

const WrapRouter = () => {
    return (
        <>
            <Route path='/' element={<Layout/>}>
                <Route path='/home' element={<Dashboard />} />
                <Route path='/Profile' element={<Profile />} />
            </Route>
        </>

    )



}

const Router = () => {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                    {WrapRouter()}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;