import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomeView from "./views/Home";

export default function App() {
    const title = "Shoebox";
    const enhancedtTitle = title + " - React App!";

    const sendNotification = () => {
        electron.notificationApi.sendNotification("New update for Shoebox!");
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        </Router>
    );
}
