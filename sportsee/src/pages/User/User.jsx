import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getData } from "../../utils/getData";

import UserMain from "../../components/UserMain/UserMain";
import BarCharts from "../../components/BarCharts/BarCharts"
import ChartGoal from "../../components/ChartGoal/ChartGoal";
import ChartAverageSession from "../../components/ChartAverageSession/ChartAverageSession";
import RadarCharts from "../../components/RadarCharts/RadarCharts";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

import iconCalories from "../../assets/iconCalories.svg";
import iconProteines from "../../assets/iconProteines.svg";
import iconGlucides from "../../assets/iconGlucides.svg";
import iconLipides from "../../assets/iconLipides.svg";



import "../User/User.css"


export default function User() {
 
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;



    return ( 
        <div className="user-chart_containers">
            <UserMain name={data.userInfos.firstName}/>
            <div className="chart-content">
              <BarCharts />
              <div className="chart-container">
                <ChartAverageSession />
                <RadarCharts />
                <ChartGoal data={data}/>
              </div>
            </div>
            <aside className="thumbnail-wrapper">
              <Thumbnail 
              icon={iconCalories}
              info={`${data.keyData.calorieCount}kCal`}
              text="Calories"
              />
              <Thumbnail 
              icon={iconProteines}
              info={`${data.keyData.proteinCount}g`}
              text="Proteines"
              />
              <Thumbnail 
              icon={iconGlucides}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
              />
              <Thumbnail 
              icon={iconLipides}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
              />

            </aside>
        </div>
     );
}
/*<ChartGoal data={data} />
 <UserAverageSessions/>*/