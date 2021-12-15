import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => (
    <>
        <header>
            <h1>My super funky, super cool app</h1>
            <Nav />
        </header>
        <section>
            <div className="section-content-container">{children}</div>
        </section>
    </>
);

export default Layout;
