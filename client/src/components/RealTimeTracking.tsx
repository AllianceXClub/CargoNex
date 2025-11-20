import React from "react";
import trackingImg from "../assets/real_time_tracking.png";
import styles from "./RealTimeTracking.module.css";

const RealTimeTracking: React.FC = () => (
    <div className={styles.container}>
        <img src={trackingImg} alt="מעקב מכולות בזמן אמת" className={styles.image} />
    </div>
);

export default RealTimeTracking;
