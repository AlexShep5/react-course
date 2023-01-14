import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth, comp }) => {

  return auth ? comp : <Navigate to='/signin' />
}
