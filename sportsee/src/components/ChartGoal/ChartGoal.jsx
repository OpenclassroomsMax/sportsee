import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

import "./ChartGoal.css"


 export default function ScoreChart({ data }) {
     
  const progression = data.score ?? data.todayScore // fix different name issue in api
  const remainsToBeDone = 1 - progression
  const dataGoal = [
    { name: 'progression', value: progression, color: '#FF0000' },
    { name: 'remainsToBeDone', value: remainsToBeDone, color: '#000000' },
  ]

  return (
    <div className="score-container">
      <h1 className="score-title">Score</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataGoal}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {dataGoal.map((entry, index) =>
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
          {dataGoal[0].value * 100}%<br />
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