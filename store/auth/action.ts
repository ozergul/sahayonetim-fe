import { LOGIN, LOGOUT, AuthActionTypes } from "./types";
import { User } from "../../models/user";

// TypeScript infers that this function is returning SendMessageAction
export function login(user: User): AuthActionTypes {
  return {
    type: LOGIN,
    payload: user,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function logout(): AuthActionTypes {
  return {
    type: LOGOUT,
  };
}
