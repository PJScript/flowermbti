import { combineReducers } from "redux";
import answerReducer from "./reducer";

export const rootReducer = combineReducers({
  answerReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

