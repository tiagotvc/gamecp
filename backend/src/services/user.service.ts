import { CustomError } from "express-handler-errors";
import userRepository from "../repository/user.repository";
import { Response } from "express";
import { FormError } from "../types/formError";

const createUser = async (username: string, password: string) => {
  try {
    const regex = /[^a-zA-Z0-9 ]/g;
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

    if (regex.test(username))
      throw new FormError({
        message: "Special characters not allowed",
        field: "username",
        code: "FORM_ERROR",
        status: 500,
      });

    if (regex.test(password))
      throw new FormError({
        message: "Special characters not allowed",
        field: "password",
        code: "FORM_ERROR",
        status: 500,
      });

    const user = await userRepository.getUserById(username);
    if (user)
      throw new FormError({
        message: "Username already in use",
        field: "username",
        code: "FORM_ERROR",
        status: 500,
      });
    const createdUser = await userRepository.createOne(username, password);
    return { user: createdUser };
  } catch (err: any) {
    return err;
  }
};

export default {
  createUser,
};
