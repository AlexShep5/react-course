import { Navigate } from "react-router-dom"

export const PublicRoute = ({ auth, comp }) => {

  return auth ? <Navigate to='/chats' /> : comp
}
