import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import NavLink from "../components/NavLink";

const Users = ({ users }) => {
    const props = usePage();
    console.log("users:", users);
    console.log("usePage:", props);
    return (
        <>
            <h1>Users &laquo;</h1>

            <div className="table-container">
                <table>
                    <tbody>
                        {users.data.map((user) => (
                            <tr key={user.id} className="cell-container">
                                <td className="cell-content">{user.name}</td>
                                <td>
                                    <Link href={`/users/${user.id}/edit`}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                {users.links.map(({ url, label }) => (
                    <NavLink href={url} key={label}>
                        {label}
                    </NavLink>
                ))}
            </div>
        </>
    );
};

Users.layout = (page) => <Layout children={page} title="Users" />;

export default Users;
