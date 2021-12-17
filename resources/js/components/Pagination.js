import React from "react";
import NavLink from "./NavLink";

const Pagination = ({ links }) => {
    const createMarkup = (label) => {
        return {
            __html: label,
        };
    };
    return (
        <div className="pagination">
            {links.map(({ url, label, active }, index) => {
                console.log("urlInPagination", url);
                return (
                    <NavLink
                        active={active}
                        as={url}
                        className={!url ? "link-span" : ""}
                        innerHtml={createMarkup(label)}
                        key={index}
                        href={!url ? null : url}
                    />
                );
            })}
        </div>
    );
};

export default Pagination;
