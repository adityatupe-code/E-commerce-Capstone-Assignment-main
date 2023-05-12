import axios from 'axios';

const URL ='http://localhost:4500';

export const authsignupapi =async (data)=>{
    try {
     return await   axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('error in api.js',error)
    }
}

export const authloginapi =async (data)=>{
    try {
     return await   axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log('error in login api.js',error);
        return error.response;
    }
}