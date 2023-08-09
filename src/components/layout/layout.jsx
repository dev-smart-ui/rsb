import React, {Suspense} from 'react';
import Header from "./header/header";
import {Outlet} from "react-router-dom";



const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>

    );
};

export default Layout;