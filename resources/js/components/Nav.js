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
                    <NavLink
                        active={url === "/" ? "active" : ""}
                        className="navlink"
                        href="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        active={url.startsWith("/users/index") ? "active" : ""}
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
                        className="navlink"
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
