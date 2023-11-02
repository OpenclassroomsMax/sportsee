import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

import "./ChartGoal.css"


 export default function ScoreChart({ data }) {
     
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <div className="score-container">
      <h1 className="score-title">Score</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-infos_containers">
        <p className="score-infos">
          {score[0].value * 100}%<br />
        </p>
        de votre
        <br /> objectif
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object,
};