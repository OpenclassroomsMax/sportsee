export const urlapi = { 

usermainapidata(id){

    return (`http://localhost:3000/user/${id}`)
},

useractivityapidata(id){

    return (`http://localhost:3000/user/${id}/activity`)
},

useraveragesessionapidata(id){

    return (`http://localhost:3000/user/${id}/average-sessions`)
},

userperformanceapidata(id){

    return (`http://localhost:3000/user/${id}/performance`)
}


}

