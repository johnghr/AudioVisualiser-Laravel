import React from "react";
import Layout from "../components/Layout";

const Settings = () => (
    <>
        <h1>Settings</h1>
        <p>Oh its a setup</p>
    </>
);

Settings.layout = (page) => <Layout children={page} title="Settings" />;

export default Settings;
