import { Request, Response, NextFunction } from "express";
import { CustomError } from "express-handler-errors";
import userRepository from "../repository/user.repository";
import jwt, { Secret, JwtPayload, sign } from "jsonwebtoken";
import { FormError } from "../types/formError";
require("dotenv").config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authConfig = {
  secret: String(process.env.JWT_SECRET),
  expires: "1h",
};

export const authenticate = async (username: string, password: string) => {
  try {
    if (!username)
      throw new FormError({
        message: "Required Field.",
        field: "username",
        code: "FORM_ERROR",
        status: 500,
      });

    if (!password)
      throw new FormError({
        message: "Required Field.",
        field: "password",
        code: "FORM_ERROR",
        status: 500,
      });

    const user = await userRepository.getUserById(username);

    if (!user) throw new Error("user not found");

    const passFromBuffer = user.recordset[0]?.password.toString("utf8");
    const parsedPass = passFromBuffer.replace(/[^a-zA-Z0-9 ]/g, "");
    if (parsedPass !== password)
      throw new FormError({
        message: "Wrong password.",
        field: "password",
        code: "FORM_ERROR",
        status: 500,
      });

    const token = sign(
      {
        id: username,
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

    if (!token) {
      throw new FormError({
        message: "Bearer token is required.",
        field: "headers.authorization",
        code: "FORM_ERROR",
        status: 500,
      });
    }

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
