import React from "react";

import { withBaseLayout } from "../layout/Base";

import ShoeCard from "../components/ShoeCard";

function Portfolio() {
    return (
        <div className="bg-green-200 h-full">
            <div className="p-3 bg-red-200"></div>
            <div className="bg-blue-200 justify-items-center">
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
                <ShoeCard />
            </div>
        </div>
    );
}

export default withBaseLayout(Portfolio);
