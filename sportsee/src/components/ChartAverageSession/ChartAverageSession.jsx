import React, { useState, useEffect } from "react";
import { getData } from '../../utils/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "../ChartAverageSession/ChartAverageSession.css"
import ToolTypeSessions from "../TooltipSessions/TooltipSessions";


const xAxisFormatter = (day) => {
  switch(day){
      case 1: return 'L';
      case 2: return 'M';
      case 3: return 'M';
      case 4: return 'J';
      case 5: return 'V';
      case 6: return 'S';
      case 7: return 'D';
      default: return '';
  }
}

 export default function ChartAverageSession({data}) { 
     
  /*const [formattedSessions, setFormattedSessions] = useState()

  useEffect(() => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    
    if (data) {
        const sessions = [...data]

        sessions.forEach(session => {
            const index = session.day
            session.day = days[index - 1]
        })
        setFormattedSessions(sessions)
    }

}, [data])*/

  return (
    <div className="objectif-container">
      <h2 className="objectif-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
            tickFormatter={xAxisFormatter} 
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
           <Tooltip content={<ToolTypeSessions />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}