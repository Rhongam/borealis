import React, { Fragment } from 'react';
import BasicAppBar from './AppBar';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <nav className="navbar">
                <BasicAppBar />
            </nav>
            <main>{children}</main>
        </Fragment>
    );
};
export default Layout;