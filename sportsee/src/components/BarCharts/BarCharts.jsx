import React from 'react';
import { useState,useEffect } from 'react';
import { getData } from '../../utils/getData';
import { useParams } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import "../BarCharts/BarCharts.css"
import ToolType from '../Tooltip/Tooltip';



 export default  function BarCharts({data}) {

    const xAxisTickFormat = (value) => {
        const valueDay = value.split('-')
        
        return (Number(valueDay[2]))
    }
    
    return (  
        <div className='barchats-containers'>
            <div className='barchats-header'>
                <h2 className='barchats-title'>Activité quotidienne</h2>
                <div className='barchats-legends'>
					<div className='barchats-infos'>
						<div className='barchats-icon_poids'></div>
						<p className='barchats-description_poids'>Poids (kg)</p>
					</div>
					<div className='barchats-infos'>
                        <div className='barchats-icon_cal'></div>
						<p className='barchats-description_cal'>Calories brûlées (kCal)</p>
					</div>
				</div>
            </div>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1" tickFormatter={xAxisTickFormat}/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}