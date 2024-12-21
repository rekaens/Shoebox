import React from "react";

import { withBaseLayout } from "../layout/Base";

// components
import PortfolioChart from "../components/portfolio/PortfolioChart";
import PortfolioList from "../components/portfolio/PortfolioList";

function Portfolio() {
    return (
        <div className="bg-green-200 h-full flex flex-col">
            <div className="bg-blue-200 flex-1 flex p-3">
                <div className="hidden md:block md:w-1/3 bg-red-400 me-2">
                    <PortfolioChart />
                </div>
                <div className="w-full md:w-2/3 bg-gray-400 ms-2">
                    <PortfolioList />
                </div>
            </div>
        </div>
    );
}

export default withBaseLayout(Portfolio);
