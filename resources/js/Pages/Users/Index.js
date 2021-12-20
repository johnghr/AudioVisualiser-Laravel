import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import { Inertia } from "@inertiajs/inertia";

const Users = () => {
    const { users } = usePage().props;

    const handleChange = (event) => {
        Inertia.get(
            "/users",
            { search: event.target.value },
            { preserveState: true }
        );
    };

    return (
        <>
            <div className="table-container">
                <div className="users-header-container">
                    <h1 className="users-h1">Users</h1>
                    <div className="create-user-link-container">
                        <Link href="users/create" className="navlink">
                            Create New User
                        </Link>
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="search.."
                    />
                </div>

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

            <Pagination links={users.links} />
        </>
    );
};

Users.layout = (page) => <Layout children={page} title="Users" />;

export default Users;
