import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useMemo, useEffect } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import { Inertia } from "@inertiajs/inertia";
import { debounce } from "lodash";
import NavLink from "../../components/NavLink";

const Users = () => {
    const { users, can } = usePage().props;
    console.log(usePage());
    const handleChange = (event) => {
        Inertia.get(
            "/users",
            { search: event.target.value },
            { preserveState: true }
        );
    };

    const debouncedHandler = useMemo(() => debounce(handleChange, 300), []);

    return (
        <>
            <div className="table-container">
                <header className="users-table-header">
                    <h1 className="users-h1">Users</h1>
                    {can.createUser && (
                        <div className="create-user-flex-container">
                            <Link href="users/create" className="navlink">
                                Create New User
                            </Link>
                            <input
                                onChange={debouncedHandler}
                                type="text"
                                placeholder="search.."
                            />
                        </div>
                    )}
                </header>

                <table>
                    <tbody>
                        {users.data.map((user) => (
                            <tr key={user.id} className="cell-container">
                                <td className="cell-content">{user.name}</td>
                                <td>
                                    {user.can.edit && (
                                        <NavLink
                                            href={`/users/${user.id}/edit`}
                                        >
                                            Edit
                                        </NavLink>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination links={users.links} />
        </>
    );
};

Users.layout = (page) => <Layout children={page} title="Users" />;

export default Users;
