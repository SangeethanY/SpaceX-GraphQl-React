import { combineReducers } from "redux";
import { totaldata } from "./stateReducer";

const reducer = combineReducers({
  data: totaldata,
});
export default reducer;
