import { useContext, useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const {user, dispatch} = useContext(AuthContext);
  //we use Context hook to access AuthContext, and grab users and dispatch function from it

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type: 'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type: 'LOGIN', username: 'hueduong'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
