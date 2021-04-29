import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer.js";
import detailReducer from "./detailReducer.js";

// const initState = {  TO TYLKO DO NAUKI
//   name: "",
//   isLogged: false,
// };

// const userReducer = (state = initState, action) => {
//   switch (action.type) {
//     default:
//       return { ...state };
//   }
// };

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
