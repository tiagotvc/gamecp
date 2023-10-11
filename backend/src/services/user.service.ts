import userRepository from "../repository/user.repository";
import { FieldError } from "../types/Error";

const createUser = async (username: string, password: string) => {
  try {
    const regex = /[^a-zA-Z0-9 ]/g;
    if (!username) FieldError("username", "Required Field.");

    if (!password) FieldError("password", "Required Field.");

    if (regex.test(username))
      FieldError("username", "Special characters not allowed.");

    if (regex.test(password))
      FieldError("password", "Special characters not allowed.");

    const user = await userRepository.getUserById(username);
    if (user) FieldError("username", "Username already in use.");

    const createdUser = await userRepository.createOne(username, password);
    return { user: createdUser };
  } catch (err: any) {
    return err;
  }
};

export default {
  createUser,
};
