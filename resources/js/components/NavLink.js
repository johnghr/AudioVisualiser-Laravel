import React from "react";
import { Link } from "@inertiajs/inertia-react";

const NavLink = ({ active, children, href }) => {
    console.log("super active", active);
    return (
        <Link className={active} href={href ? href : null}>
            {children}
        </Link>
    );
};

export default NavLink;
