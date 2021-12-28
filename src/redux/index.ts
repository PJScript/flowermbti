import { combineReducers } from "redux";
import { answerReducer,mbtiContentReducer } from "./reducer";


export const rootReducer = combineReducers({
  answerReducer,
  mbtiContentReducer
})



// export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

