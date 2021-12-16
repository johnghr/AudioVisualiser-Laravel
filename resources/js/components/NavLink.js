import React from "react";
import { Link } from "@inertiajs/inertia-react";

const NavLink = ({ active, children, href }) => (
    <Link className={active} href={href}>
        {children}
    </Link>
);

export default NavLink;
