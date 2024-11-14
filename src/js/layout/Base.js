import React from "react";

import NavBar from "../components/Navbar";

export default function BaseLayout({ children, ...props }) {
    return (
        <div className="flex flex-col h-screen">
            <NavBar {...props} />

            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

function getDisplayName(Component) {
    return Component.displayName || Component.name || "Component";
}

export const withBaseLayout = (Component, config) => (props) => {
    const viewName = getDisplayName(Component);

    return (
        <BaseLayout {...config} view={viewName}>
            <Component {...props} />
        </BaseLayout>
    );
};