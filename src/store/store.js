import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { userDetailsReducer } from "./reducers/userReducers";
// import { urlDetailsReducer } from "./reducers/urlReducers";
// import { CameraReducers } from "./reducers/CameraReducers";
import { subuserDetailsReducer } from "./reducers/subuserReducer";

const reducer = combineReducers({
  // userDetails: userDetailsReducer,
  // urlDetails: urlDetailsReducer,
  // CameraDetails: CameraReducers,
  subuserDetails: subuserDetailsReducer,
});

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null

const initialState = {
  //   userLogin: { userInfo: userInfoFromStorage },
  //   userProfile: { profile: userInfoFromStorage },
};

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
