import { ActionType,INSERT_ANSWER_DATA } from "./action"
import { answerData, answerDataState } from "./initialState"
import { initalState } from "./initialState"

const answerReducer = (state: answerDataState = initalState, action: ActionType ) => {
  switch (action.type) {
    case INSERT_ANSWER_DATA:
      return state.concat({
        idx:action.payload.idx,
        answerIdx:action.payload.answerIdx
      })
  default:
    return state;
  }
}


export default answerReducer