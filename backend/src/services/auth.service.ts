import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'express-handler-errors';
import userRepository from '../repository/user.repository';
import jwt, { Secret, JwtPayload, sign } from 'jsonwebtoken';
require("dotenv").config();


export interface CustomRequest extends Request {
  token: string | JwtPayload;
  
 }

export const authConfig = {
  secret: String(process.env.JWT_SECRET),
  expires: '1h',
}

export const authenticate = async (username: string, password: string) => {
  try {
    if (!username) throw new CustomError({
      message: 'Required Field.',
      field:'username',
    })

    if (!password) throw new CustomError({
      message: 'Required Field.',
      field:'password',
    })
    
    const user = await userRepository.getUserById(username);

    if (!user) throw new Error('user not found')
    
    const passFromBuffer = user.recordset[0]?.password.toString('utf8');
    const parsedPass = passFromBuffer.replace(/[^a-zA-Z0-9 ]/g, "")
    if (parsedPass !== password) throw new CustomError({
      message: 'Wrong password.',
      field:'password',
    })

    const token = sign({
      id:username
     },authConfig.secret ?? '', {
      expiresIn:authConfig.expires
     })

     return token;
  }
  catch (err: any) {
   return err.message;
  } 
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const token = req.headers.authorization?.replace('Bearer ', '');
   
    if (!token) {
      throw new CustomError({
        message: 'Bearer token is required.',
        field:'headers.authorization',
      })
    }

    jwt.verify(token as string, authConfig.secret);
   
    next();
  } catch (err) {
    console.log(err)
    res.json({message: 'Not authorized'})
  }
 };

 export default {
  authenticate,
  auth
 }