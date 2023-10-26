import { getUserActivity,getUserAverageSessions, getUserMain, getUserPerformance, } from "./ApiCall";

/*import { getUserMain } from "../../public/data/mokedData/userMain";
import { getUserActivity } from "../../public/data/mokedData/userMain";
import { getUserPerformance } from "../../public/data/mokedData/userMain";
import { getUserAverageSessions } from "../../public/data/mokedData/userMain";*/

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_ACTIVITY":
      data = await getUserActivity(id);
      break;
    
    case "USER_PERFORMANCE":
      data = await getUserPerformance(id);
      break;
      
    case "USER_AVERAGE_SESSIONS":
      data = await getUserAverageSessions(id);
      break;
    case "USER_MAIN_DATA":
      data = await getUserMain(id);
      break;
    default:
  }
  return data;
};
