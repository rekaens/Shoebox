import React from "react";

import { Link } from "react-router-dom";

export default function UserMenu() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-1713936211478.webp"
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">TODO</span>
                    </a>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <a>
                        Links
                        <span className="badge">TODO</span>
                    </a>
                </li>
                <li>
                    <Link to="/">
                        Logout
                        <span className="badge">TODO</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
