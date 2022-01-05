import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';

export default function Routers() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/task' element={<Task/>}/>
                <Route exact path='/task/:id' element={<Task/>}/>
            </Routes>
        </BrowserRouter>
    )
}