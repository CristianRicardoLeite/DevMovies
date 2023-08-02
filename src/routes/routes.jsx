
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Detail, Home } from '../containers'
import DefaultLayout from '../layout/DefaultLayout'

const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes/:id" element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Router
