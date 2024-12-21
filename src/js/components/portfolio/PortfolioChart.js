import React from "react";

import PieChart from "./charts/PieChart";

export default function PortfolioChart() {
    return (
        <div className="flex flex-col h-full p-1 bg-gray-200">
            <div className="h-auto flex justify-between bg-red-200">
                <div role="tablist" className="tabs tabs-boxed w-1/3">
                    <a role="tab" className="tab">Line</a>
                    <a role="tab" className="tab tab-active">Pie</a>
                </div>
                <div className="pe-2">
                {/*  Pagination in the future?  */}
                </div>
            </div>
            <div className="flex-1 bg-green-500 content-center items-center mt-1 mb-1">
                <PieChart/>
            </div>
            <div className="bg-gray-400 h-1/6 flex items-center justify-center">
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Value:</div>
                        <div className="stat-value">$31K</div>
                        <div className="stat-desc">+ $2000 in 30 days</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Shoes</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">+ 121 in 30 days</div>
                    </div>
                </div>
            </div>
        </div>
    );
}