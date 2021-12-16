import React from "react";
import Layout from "../components/Layout";

const Home = () => (
    <>
        <div>
            <h1>Home</h1>
        </div>
    </>
);

Home.layout = (page) => <Layout children={page} title="Welcome" />;

export default Home;
