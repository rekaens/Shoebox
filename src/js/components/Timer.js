import React, { useState, useEffect } from "react";

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 59,
    });

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            } else {
                                clearInterval(timerInterval);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className="flex gap-5">
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
            </div>
        </div>
    );
}
