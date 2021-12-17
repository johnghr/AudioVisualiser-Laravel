import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Link } from "@inertiajs/inertia-react";
import NavLink from "./NavLink";

const Nav = () => {
    const { url } = usePage();
    return (
        <nav>
            <ul>
                <li>
                    <NavLink href="/" active={url === "/" ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        active={url.startsWith("/users") ? "active" : ""}
                        className="navlink"
                        href="/users"
                    >
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        active={url.startsWith("/settings") ? "active" : ""}
                        className="navlink"
                        href="/settings"
                    >
                        Settings
                    </NavLink>
                </li>
                <li>
                    <Link
                        as="button"
                        href="/logout"
                        id="link-button"
                        method="post"
                    >
                        Log Out
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
