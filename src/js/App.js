import React from "react";

export default function App() {
    const title = "Shoebox";
    const enhancedtTitle = title + " - React App!";

    const sendNotification = () => {
        electron.notificationApi.sendNotification("New update for Shoebox!");
    };

    return (
        <>
            <h1> {enhancedtTitle} </h1>
            <button onClick={sendNotification}>Send Notification</button>
        </>
    );
}
