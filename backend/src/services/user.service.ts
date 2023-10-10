import { CustomError } from 'express-handler-errors';
import userRepository from '../repository/user.repository';
import { Response } from "express";

const createUser = async (username: string, password: string) => {
    try {
        const regex = /[^a-zA-Z0-9 ]/g;
        if (!username) throw new CustomError({
            message: 'Required Field.',
            field:'username',
          })
      
          if (!password) throw new CustomError({
            message: 'Required Field.',
            field:'password',
          })

          if (regex.test(username)) throw new CustomError({
            message: 'Special characters not allowed',
            field:'username',
          })
      
          if (regex.test(password)) throw new CustomError({
            message: 'Special characters not allowed',
            field:'password',
          })
       
        const user = await userRepository.getUserById(username);
      if (user) throw new CustomError({
            message: 'Username already in use',
            field:'username',
          })
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
    

