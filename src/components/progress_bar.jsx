import React, { useEffect, useState } from "react";
import "./progress.css";

export const ProgressBarConstants = {
  MIN: 0,
  MAX: 100,
};

export default function ProgressBar({ value }) {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {value.toFixed(0)}%
      </span>
      <div
        //   style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent/100})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={ProgressBarConstants.MIN}
        aria-valuemax={ProgressBarConstants.MAX}
        aria-aria-valuenow={percent.toFixed(0)}
      />
    </div>
  );
}
