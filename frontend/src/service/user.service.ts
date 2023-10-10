import axios from 'axios';

export interface IUser {
    username: string;
    password: string;
}
export const createUser = async ({username, password}:IUser) => {
    const data = await axios.post(`${process.env.BACKEND_URL}/user/create`, {
        password, username
    });
    return data;
}