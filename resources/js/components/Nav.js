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
                    <NavLink active={url === "/" ? "active" : ""} href="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        active={url.startsWith("/users/index") ? "active" : ""}
                        href="/users"
                    >
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        active={url.startsWith("/settings") ? "active" : ""}
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
