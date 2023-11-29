import { useContext } from "react";
import { useParams } from "react-router";

import UserMain from "../../components/UserMain/UserMain";
import BarCharts from "../../components/BarCharts/BarCharts";
import ChartGoal from "../../components/ChartGoal/ChartGoal";
import ChartAverageSession from "../../components/ChartAverageSession/ChartAverageSession";
import RadarCharts from "../../components/RadarCharts/RadarCharts";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

import iconCalories from "../../assets/iconCalories.svg";
import iconProteines from "../../assets/iconProteines.svg";
import iconGlucides from "../../assets/iconGlucides.svg";
import iconLipides from "../../assets/iconLipides.svg";

import "../User/User.css";
import { urlapi } from "../../utils/const/urlapi";
import { urlmockeddata } from "../../utils/const/urlmockeddata";
import { Getdata } from "../../utils/ApiCall";
import { FetchContext } from "../../utils/context/FetchContext";

export default function User() {
  const { id } = useParams();

  const { fetch } = useContext(FetchContext);
  const url = fetch === "API" ? urlapi : urlmockeddata;

  const [errorMain, isLoadingMain, dataMain] = Getdata(url.usermaindata(id));
  const [errorActivity, isLoadingActivity, dataActivity] = Getdata(
    url.useractivitydata(id)
  );
  const [errorAverageSession, isLoadingAverageSession, dataAverageSession] =
    Getdata(url.useraveragesessiondata(id));
  const [errorPerformance, isLoadingPerformance, dataPerformance] = Getdata(
    url.userperformancedata(id)
  );

  if (
    isLoadingMain ||
    isLoadingActivity ||
    isLoadingAverageSession ||
    isLoadingPerformance
  ) {
    return <p>laoding...</p>;
  }
  if (errorMain || errorActivity || errorAverageSession || errorPerformance) {
    return <p>error</p>;
  }

  return (
    <div className="dashboard_containers">
      <div className="user-chart_containers">
        <UserMain name={dataMain?.userInfos?.firstName} />
        <BarCharts data={dataActivity?.sessions} />
        <div className="chart-container">
          <ChartAverageSession data={dataAverageSession?.sessions} />
          <RadarCharts data={dataPerformance} />
          <ChartGoal data={dataMain} />
        </div>
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
