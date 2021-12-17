import React from "react";
import { Link } from "@inertiajs/inertia-react";

const NavLink = ({ active, as, className, children, href, innerHtml }) => {
    // console.log(url);
    return (
        <Link
            as={!as ? "span" : "a"}
            className={`${active ? "active" : ""} ${className}`}
            dangerouslySetInnerHTML={innerHtml ? innerHtml : null}
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLink;
