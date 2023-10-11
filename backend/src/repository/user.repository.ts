import sql from "mssql";
import { config } from "../database";
import AuthService from "../services/auth.service";
require("dotenv").config();

export const getUserById = async (username: string) => {
  await sql.connect(config);
  const request = new sql.Request();

  request.input("username", sql.VarChar, username);
  const queryResult = await request.query(
    `USE RF_User_AoP 
     SELECT 
       CONVERT(VARCHAR, id) AS converted_id, 
       CONVERT(VARCHAR, password) AS password, 
       CONVERT(NVARCHAR(MAX), birthdate) AS birthdate, 
       CONVERT(NVARCHAR(MAX), Email) AS Email
     FROM tbl_rfaccount
     WHERE CAST(CONVERT(NVARCHAR(MAX), id) AS VARBINARY) = CAST(@username AS VARBINARY)`
  );

  const user = {
    login: queryResult.recordset[0]['converted_id'].replace(/\x00/g, ''),
    password: queryResult.recordset[0]['password'].replace(/\x00/g, ''),
    birthdate: queryResult.recordset[0]['birthdate'],
    email: queryResult.recordset[0]['Email'],
  };

  return user;
};

export const createOne = async (username: string, password: string) => {
  await sql.connect(config);
  const request = new sql.Request();

  request.input("username", sql.VarBinary, username);
  request.input("password", sql.VarBinary, password);

  const result = await request.query(
    `USE RF_User_AoP INSERT INTO tbl_RFTestAccount(id, password, BCodeTU) VALUES (@username, @password, 1)`
  );

  return result;
};

export default {
  getUserById,
  createOne,
};