import { useEffect, useState } from "react";
import Userdata from "./Class/userMain";
import UserActivitydata from "./Class/userActivity";
import UserPerformancedata from "./Class/userPerformance";
import UserAveragedata from "./Class/userAverage";

export const Getdata = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  function checkError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(checkError)
      .then((result) => {
        console.log("result=", result);
        console.log(url);
        setData(
          new Userdata(
            result.data.id,
            result.data.userInfos,
            result.data.todayScore,
            result.data.score,
            result.data.keyData
          )
        );
        if (url.includes("/activity")) {
          setData(
            new UserActivitydata(result.data.userId, result.data.sessions)
          );
        }
        if (url.includes("/performance")) {
          setData(
            new UserPerformancedata(
              result.data.userId,
              result.data.kind,
              result.data.data
            )
          );
        }
        if (url.includes("/average-sessions")) {
          setData(
            new UserAveragedata(result.data.userId, result.data.sessions)
          );
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return [error, isLoading, data];
};
