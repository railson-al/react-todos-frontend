import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import QRCode from "../views/QRCode";
import Task from '../views/Task';

export default function Routers() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='task' element={<Task/>}/>
                <Route path='task/:_id' element={<Task/>}/>
                <Route path='sync' element={<QRCode/>}/>
            </Routes>
        </BrowserRouter>
    )
}