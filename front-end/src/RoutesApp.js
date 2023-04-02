import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Register from "./pages/Register"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;