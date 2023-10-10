import axios from 'axios';
export interface IUser {
    username: string;
    password: string;
}
export const createUser = async ({username, password}:IUser) => {
    const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create`, {
        password, username
    });
    console.log(data);
    return data;
}

export const signin = async ({username, password}:IUser) => {
    const token = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/signin?username=${username}&password=${password}`)
    return token;
}