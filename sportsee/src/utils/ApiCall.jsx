import {useEffect, useState } from "react";
import Userdata from "./Class/userMain";
import UserActivitydata from "./Class/userActivity";
import UserPerformancedata from "./Class/userPerformance";
import UserAveragedata from "./Class/userAverage";



/*const api = axios.create({
    baseURL: `http://localhost:3000/user`
});*/


export const Getdata =  (url) => {
  
    const [res, setRes] = useState(null);
    const [isloading, setIsloading] = useState(false);
    useEffect  (  ()  =>  {
      setIsloading(true);
      fetch(url).then(result => result.json())
      .then(data => {
        console.log(data);
        setIsloading(false);
        if (url.includes("/activity")){
          setRes(new UserActivitydata(data.data.userId, data.data.sessions))  
        }
        if (url.includes("/performance")){
          setRes(new UserPerformancedata(data.data.userId, data.data.kind, data.data.data))  
        }
        if (url.includes("/average-sessions")){
          setRes(new UserAveragedata(data.data.userId, data.data.sessions))
        }
        /*return res.data;*/
       /*console.log(res.data.data.id);*/
       setRes (new Userdata(data.data.id, data.data.userInfos, data.data.todayScore, data.data.keyData))
      })
      
    },[url]);
    console.log(res)
    return {res, isloading};
    /*return res;*/
    
    
  
  
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