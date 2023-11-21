import {useEffect, useState } from "react";
import Userdata from "./Class/userMain";
import UserActivitydata from "./Class/userActivity";
import UserPerformancedata from "./Class/userPerformance";
import UserAveragedata from "./Class/userAverage";



/*const api = axios.create({
    baseURL: `http://localhost:3000/user`
});*/


export const Getdata =  (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  function checkError(response) {
    //check if >= 200 && response.status <= 299
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  }

  useEffect(() => {
    console.log("useEffect")
    setIsLoading(true);
    fetch(url)
      .then(checkError)
      .then((result) => {
        console.log("result=", result)
        if (url.includes("/activity")){
          console.log("je suis là 1")
          setData(new UserActivitydata(result.data.userId, result.data.sessions))  
        }
        if (url.includes("/performance")){
          console.log("je suis là 2")
          setData(new UserPerformancedata(result.data.userId, result.data.kind, result.data.data))  
        }
        if (url.includes("/average-sessions")){
          console.log("je suis là 3")
          setData(new UserAveragedata(result.data.userId, result.data.sessions))
        }
        
        /*setData (new Userdata(result.data.id, result.data.userInfos, result.data.todayScore, result.data.keyData))*/
        
        /*return res.data;*/
       /*console.log(res.data.data.id);*/
       /*setData (new Userdata(result.data.id, result.data.userInfos, result.data.todayScore, result.data.keyData))*/
        // setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  console.log("dataaaaaaaaaaaaa",error, isLoading, data)
  return [error, isLoading, data];
};


/*export const getdata = async (id) => {
  try {
    console.log(urlapi)
    const res = await axios.get(urlapi.find(usermainapidata));
    console.log(res)
    /*if (url.includes("/activity")){
      return new UserActivitydata(res.data.userId, res.data.sessions)  
    }*/
    /*return res.data;*/
   /*console.log(res.data.data.id);
    return new Userdata(res.data.data.id, res.data.data.userInfos, res.data.data.todayScore, res.data.data.keyData)
    

  } catch (e) {
  }
};*/






































 /*export const getUserActivity = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}/activity`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  export const getUserMain = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  export const getUserPerformance = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}/performance`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  export const getUserAverageSessions = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };*/