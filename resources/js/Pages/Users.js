import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { Inertia } from "@inertiajs/inertia";

const Users = () => {
    const { users } = usePage().props;
    // const [search, setSearch] = useState("");
    // const formState = useState({ search: "" });
    // set state runs async so we can't use the new value being passed into it immediatley
    // setSearch('newValue'); console.log(search); logs out 'oldvalue'

    const handleChange = (event) => {
        // setSearch(event.target.value);
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
                    <h1 className="users-header">Users</h1>
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
