import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout';
import Configurator from './Configurator'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Configurator/>} />
                </Routes>
            </Layout>
        </Router>
    );
};
export default Pages;