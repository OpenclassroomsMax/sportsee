import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'


import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import "../RadarCharts/RadarCharts.css";

function RadarCharts({ data }) {
  const [performance, setPerformance] = useState();

  useEffect(() => {
    if (data) {
      const formatData = data.data?.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return { ...data };
        }
      }); 
      setPerformance(formatData);
    }
  }, [data]);

  return (
    <div className="radar-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarCharts.prototype={
  data: PropTypes.object.isRequired,
};

export default RadarCharts;