import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// views
import Welcome from "./views/Welcome";
import HomeView from "./views/Home";
import PortfolioView from "./views/Portfolio";
import SettingsView from "./views/Settings";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Navbar />

                <div className="flex flex-1">
                    <Sidebar />

                    <div className="flex-1 p-4">
                        <Routes>
                            <Route path="/portfolio" element={<PortfolioView />} />
                            <Route path="/settings" element={<SettingsView />} />
                            <Route path="/home" element={<HomeView />} />
                            <Route path="/" element={<Welcome />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
