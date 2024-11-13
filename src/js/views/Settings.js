import React from "react";

import { withBaseLayout } from "../layout/Base";

import ThemeToggle from "../components/ThemeToggle";

function Settings() {
    return (
        <div className="p-3 bg-blue-200 h-full justify-items-center">
            <div className="mb-3 w-3/4 md:w-2/4 flex border-2 border-solid border-red-700 justify-between  h-16">
                Theme
                <ThemeToggle />
            </div>
            <div className="mt-3 mb-3 w-3/4 md:w-2/4 flex border-2 border-solid border-red-700 justify-between h-16">
                Language
                <select className="select select-bordered select-sm">
                    <option>English</option>
                    <option>German</option>
                </select>
            </div>
            <div className="mt-3 mb-3 w-3/4 md:w-2/4 flex border-2 border-solid border-red-700 justify-between h-16">
                Currency
                <select className="select select-bordered select-sm">
                    <option>$ USD</option>
                    <option>€ EUR</option>
                </select>
            </div>
        </div>
    );
}

export default withBaseLayout(Settings);