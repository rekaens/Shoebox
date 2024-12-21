import React from "react";
import PortfolioNavbar from "./PortofolioNavbar";
import ShoeCard from "../ShoeCard";

export default function PortfolioList() {
    return (
        <div className="bg-green-500">
            <PortfolioNavbar />
            <div className="flex items-center justify-center">
                <ShoeCard />
            </div>
        </div>
    );
}