import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";


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
import { urlapi } from "../../utils/const/urlapi";
import { urlmockeddata } from "../../utils/const/urlmockeddata";
import { Getdata } from "../../utils/ApiCall";
import { FetchContext } from "../../utils/context/FetchContext"




export default function User() {
 
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  const {fetch} = useContext(FetchContext)
  const url = fetch === "API" ? urlapi : urlmockeddata;

  /*useEffect(() => {
    const data = async () => {
      const request = await getdata(id);
      console.log(request)
      if (!request) return alert("data error");
      setData(request);
      console.log(request)
    };
    data() 
  }, [id]);*/
  /*console.log(data.length)*/
 if (data === 0) return null;

  /*const activity = getdata(url.useractivityapidata(id));
  const averagesessions = getdata (url.useraveragesessionapidata(id));*/
  const [errorMain, isLoadingMain, dataMain] = Getdata(url.usermainapidata(id));
  const [errorActivity, isLoadingActivity, dataActivity] = Getdata(url.useractivityapidata(id));
  const [errorAverageSession, isLoadingAverageSession, dataAverageSession] = Getdata(url.useraveragesessionapidata(id));
  const [errorPerformance, isLoadingPerformance, dataPerformance] = Getdata(url.userperformanceapidata(id));

  /*const performance = getdata (url.userperformanceapidata(id));*/
  console.log(dataActivity?.sessions);
  if(isLoadingMain){
    return <p>laoding...</p>
  }
  if(isLoadingActivity){
    return <p>laoding...</p>
  }
  if(isLoadingAverageSession){
    return <p>laoding...</p>
  }
  if(isLoadingPerformance){
    return <p>laoding...</p>
  }

    return ( 
        <div className="user-chart_containers">
          <UserMain name={dataMain?.userInfos?.firstName}/>
          <BarCharts data={dataActivity?.sessions}/>
          <div className="chart-container">
            <ChartAverageSession data={dataAverageSession?.sessions}/>
            <RadarCharts data={dataPerformance}/>
            <ChartGoal data={dataMain}/>
          </div>
          <aside className="thumbnail-wrapper">
              <Thumbnail 
              icon={iconCalories}
              info={`${dataMain?.keyData?.calorieCount}kCal`}
              text="Calories"
              />
              <Thumbnail 
              icon={iconProteines}
              info={`${dataMain?.keyData?.proteinCount}g`}
              text="Proteines"
              />
              <Thumbnail 
              icon={iconGlucides}
              info={`${dataMain?.keyData?.carbohydrateCount}g`}
              text="Glucides"
              />
              <Thumbnail 
              icon={iconLipides}
              info={`${dataMain?.keyData?.lipidCount}g`}
              text="Lipides"
              />

            </aside>
        </div>
        
     );
}
/*<BarCharts data={dataActivity?.sessions}/>*/
/*<ChartAverageSession data={dataAverageSession?.sessions}/>
                <RadarCharts data={dataPerformance}/>*/











/*<ChartGoal data={dataActivity.sessions} />*/
/*<ChartGoal data={data} />
 <UserAverageSessions/>*/

 /*<div className="chart-content">
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

            </aside>*/