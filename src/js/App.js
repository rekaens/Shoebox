import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// views
import HomeView from "./views/Home";

export default function App() {
    const sendNotification = () => {
        electron.notificationApi.sendNotification("New update for Shoebox!");
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <div className="flex flex-1">
                <Sidebar />

                <div className="flex-1 p-4">
                    <HomeView />
                </div>
            </div>
        </div>
    );
}
