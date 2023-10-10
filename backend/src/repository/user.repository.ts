import sql from "mssql";
import { config } from "../database";
require('dotenv').config();

// Todo: change query to use binding inputs to avoid sql inject
export const getUserById = async (username: string) => {
 await sql.connect(config);
  const result = await sql.query(`USE RF_User_AoP SELECT * FROM tbl_RFTestAccount where id='${username}'`);
  console.log(result)
  return result;
}

// Todo: change query to use binding inputs to avoid sql inject
export const createOne = async (username: string, password: string) => {
    await sql.connect(config);
    const result = await sql.query(`USE RF_User_AoP INSERT INTO tbl_RFTestAccount( id,password,BCodeTU) VALUES ( CONVERT(varbinary(17), '${username}'), CONVERT(varbinary(24), '${password}'), 1)`);
    return result;
}

export const createUser = async (username: string, password: string): Promise<any> => {
  const user = await getUserById(username);
  if (user) throw new Error("username already in use");
  const createUser = await createOne(username, password);
  return createUser;
};
