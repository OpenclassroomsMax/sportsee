export const urlapi = {
  usermaindata(id) {
    return `http://localhost:3000/user/${id}`;
  },

  useractivitydata(id) {
    return `http://localhost:3000/user/${id}/activity`;
  },

  useraveragesessiondata(id) {
    return `http://localhost:3000/user/${id}/average-sessions`;
  },

  userperformancedata(id) {
    return `http://localhost:3000/user/${id}/performance`;
  },
};