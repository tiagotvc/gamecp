import { Request, Response, NextFunction } from "express";
import userRepository from "../repository/user.repository";
import jwt, { JwtPayload, sign } from "jsonwebtoken";
import { FieldError, NotFoundError } from "../types/Error";
require("dotenv").config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authConfig = {
  secret: String(process.env.JWT_SECRET),
  expires: "1h",
};

export const authenticate = async (
  username: string,
  password: string,
  response: Response
) => {
  try {
    if (!username) FieldError("username", "Required Field.");

    if (!password) FieldError("password", "Required Field.");

    const user = await userRepository.getUserById(username);

    if (!user) NotFoundError("user not found");

    console.log("nao parou");

    const passFromBuffer = user?.password.toString("utf8");
    const parsedPass = passFromBuffer.replace(/[^a-zA-Z0-9 ]/g, "");
    if (parsedPass !== password) FieldError("password", "Wrong password.");

    const token = sign(
      {
        id: username,
        isAdmin: user?.isAdmin,
      },
      authConfig.secret ?? "",
      {
        expiresIn: authConfig.expires,
      }
    );

    return { token: token };
  } catch (err: any) {
    return err;
  }
};

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token)
      FieldError("headers.authorization", "Bearer token is required.");

    jwt.verify(token as string, authConfig.secret);

    next();
  } catch (err) {
    console.log(err);
    res.json({ message: "Not authorized" });
  }
};

export default {
  authenticate,
  auth,
};
