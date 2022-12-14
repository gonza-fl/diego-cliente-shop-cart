import React from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import PromocionApp from '../components/PromocionApp';
export const Router = () => {
    const errorMsg = 'No se encontraron Productos!';
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greating={errorMsg} />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemListContainer />} />

            </Routes>
            <div>

                <PromocionApp />
                <Footer />
            </div>
        </>
    )
}
