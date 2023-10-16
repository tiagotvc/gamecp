import { Navigate } from "react-router-dom"
import jwt_decode from "jwt-decode";

export interface ITOKEN {
    exp: number,
    iat: number,
    id: string,
    isAdmin: boolean
}


export const parseToken = () => {
    const token = JSON.parse(localStorage.getItem("token") || "")
    if (token) return jwt_decode(token);
    else return (<Navigate to="/" replace/>)
}


export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = JSON.parse(localStorage.getItem("token") || "")
    let currentDate = new Date();
    const decodedJWT: ITOKEN = jwt_decode(token);

    const hasExpired = decodedJWT?.exp * 1000 < currentDate.getTime()
  
    return !hasExpired? children : <Navigate to="/" replace/>
}