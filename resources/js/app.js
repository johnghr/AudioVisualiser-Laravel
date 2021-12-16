import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import Head from "@inertiajs/inertia-react";

createInertiaApp({
    resolve: async (name) => await import(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init();
