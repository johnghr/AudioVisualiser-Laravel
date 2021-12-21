import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
    const { auth } = usePage().props;
    const userName = auth.user.username;

    return (
        <>
            <header className="layout-header">
                <div className="layout-header-contents">
                    <h1>My App</h1>
                    <p>Welcome back {userName}</p>
                </div>

                <Nav />
            </header>
            <section className="layout-section">
                <div className="section-content-container">{children}</div>
            </section>
        </>
    );
};

export default Layout;
