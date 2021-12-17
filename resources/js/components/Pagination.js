import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import NavLink from "./NavLink";

const Pagination = ({ links }) => {
    const createMarkup = (label) => {
        return {
            __html: label,
        };
    };

    const props = usePage();
    console.log("usePage props", props);
    return (
        <div className="pagination">
            {links.map(({ url, label, active }, index) => (
                <NavLink
                    active={active}
                    as={url}
                    className={!url ? "link-span" : ""}
                    innerHtml={createMarkup(label)}
                    key={index}
                    href={!url ? null : url}
                />
            ))}
        </div>
    );
};

export default Pagination;
