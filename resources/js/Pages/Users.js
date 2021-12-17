import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const Users = () => {
    const { users } = usePage().props;
    console.log("usePageprops", users);
    return (
        <>
            <div className="table-container">
                <h1 className="users-header">Users</h1>
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
