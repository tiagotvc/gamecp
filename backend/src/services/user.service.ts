import userRepository from '../repository/user.repository';
import { Response } from "express";

const createUser = async (username: string, password: string) => {
    try {
        const regex = /[^a-zA-Z0-9 ]/g;
        if (!username || !password) throw new Error('username and password is required');
        if (regex.test(username) || regex.test(password)) throw new Error('special characters not allowed');
        const user = await userRepository.getUserById(username);
        if (user) throw new Error('username already in use');
        const createdUser = await userRepository.createOne(username, password);
        return createdUser
    }
    catch(err: any) {
        return err.message;
    } 
}

export default {
    createUser,
}
    

