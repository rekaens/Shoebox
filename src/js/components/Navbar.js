import React from "react";

export default function Navbar() {
    return (
        <div className="flex h-16 border border-solid border-black items-center">
            <div className="w-1/4 border border-solid flex items-center justify-start ms-2">Links?</div>
            <div className="flex-1 border border-solid flex items-center justify-center">Switchables Tabs</div>
            <div className="w-1/4 border border-solid flex items-center justify-end">
                <span className="me-2">Hi, User X</span>
                <button className="btn btn-outline btn-error me-2">Logout</button>
            </div>
        </div>
    );
}
