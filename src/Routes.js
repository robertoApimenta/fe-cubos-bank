import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewAccount from './pages/NewAccount';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/new-account' element={<NewAccount />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
