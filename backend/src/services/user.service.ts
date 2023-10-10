import userRepository from '../repository/user.repository';
import { Response } from "express";

const createUser = async (username: string, password: string) => {
    try {
        if (!username || !password) throw new Error('username and password is required');
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
    

