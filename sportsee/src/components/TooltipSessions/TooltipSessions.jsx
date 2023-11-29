import React from "react";
import "../TooltipSessions/TooltipSessions.css";

export default function ToolTypeSessions({ active, payload }) {
  if (active) {
    return (
      <div className="tooltipsessions-container">
        <p className="tooltipsessions-infos">{payload[0].value} min</p>
      </div>
    );
  }
  return null;
}
