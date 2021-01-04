import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import auth from "./auth/reducer";
import tick from "./tick/reducer";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({
  auth,
  tick,
});
export type RootState = ReturnType<typeof combinedReducer>;

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore: MakeStore<RootState> = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
export const wrapper = createWrapper<RootState>(initStore);
