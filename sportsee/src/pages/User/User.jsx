import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getData } from "../../utils/getData";

import UserMain from "../../components/UserMain/UserMain";
import BarCharts from "../../components/BarCharts/BarCharts"
import ChartGoal from "../../components/ChartGoal/ChartGoal";


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
        <main>
            <UserMain name={data.userInfos.firstName}/>
            <BarCharts />
            <ChartGoal data={data} />
        </main>
     );
}
