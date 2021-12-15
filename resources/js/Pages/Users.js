import React from "react";
import Layout from "../components/Layout";

const Users = ({ time }) => (
    <>
        <Layout>
            <h1>Users</h1>
            <p>Chime chime chime, ticking ticking {time}</p>
        </Layout>
    </>
);

export default Users;
