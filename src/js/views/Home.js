import React from "react";

export default function Home() {
    return (
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h1 className="text-2xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
            <p className="text-gray-700">
                Wenn du diese Nachricht mit blauem Text und grauem Hintergrund siehst, funktioniert Tailwind.
            </p>
            <button className="btn btn-primary">Test DaisyUI Button</button>
        </div>
    );
}
