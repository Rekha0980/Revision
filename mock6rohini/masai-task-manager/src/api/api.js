export const postUserData= async(data)=>{
    return await fetch(`https://evaluationapi.onrender.com/user`,{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res)=>res.json())
}

export const getUser = async () => {
    return await fetch(`https://evaluationapi.onrender.com/user`)
    .then((res)=>res.json());
}

export const addTaskData = async (data) => {
    return await fetch(`https://evaluationapi.onrender.com/tasks`,{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res)=>res.json())
}

export const getLoggedUserTask = async (userName) => {
    return await fetch(`https://evaluationapi.onrender.com/tasks?name=${userName}`)
    .then((res)=>res.json());
}

export const deleteTask = async (id) => {
    return await fetch(`https://evaluationapi.onrender.com/tasks/${id}`,{
        method:"DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res)=>res.json())
}

export const addLoginData= async(data)=>{
    return await fetch(`https://evaluationapi.onrender.com/loggeduser`,{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res)=>res.json())
}

export const getLoggedUserData = async (params) => {
    return await fetch(`https://evaluationapi.onrender.com/loggeduser/${params}`)
    .then((res) => res.json());
}

export const logoutUser = async (id) => {
    return await fetch(`https://evaluationapi.onrender.com/loggeduser/${id}`,{
        method:"DELETE",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res)=>res.json())
}