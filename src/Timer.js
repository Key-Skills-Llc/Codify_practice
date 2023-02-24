import { useState } from "react";
import { getPadTime } from "./getPadTime";

function Timer() {
    const [timeLeft, setTimeLeft] = useState(20 * 60)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)
    
    return (
        <div className="app">
        <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    </div>
)

}
export default Timer