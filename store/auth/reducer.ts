import { AuthActionTypes, LOGIN, LOGOUT } from "./types";

export interface AuthState {
  isSignedIn: boolean;
  user: any;
}

const authState: AuthState = {
  isSignedIn: false,
  user: {},
};

export default function reducer(
  state = authState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN:
      return { ...state, isSignedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, isSignedIn: false, user: {} };
    default:
      return state;
  }
}
