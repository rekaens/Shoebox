import React from "react";

import { withBaseLayout } from "../layout/Base";

import ShoeCard from "../components/ShoeCard";
import PortfolioNavbar from "../components/PortofolioNavbar";

function Portfolio() {
    return (
        <div className="bg-green-200 h-full">
            <PortfolioNavbar />
            <div className="bg-blue-200 justify-items-center">
                <ShoeCard />
            </div>
        </div>
    );
}

export default withBaseLayout(Portfolio);
