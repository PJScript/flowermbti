import { ActionType,INSERT_ANSWER_DATA, REMOVE_ANSWER, SAVE_MBTI_CONTENT } from "./action"
import { answerData, answerDataState, mbtiDataState, answerInitalState, mbtiInitalState } from "./initialState"


export const answerReducer = (state: answerDataState = answerInitalState, action: ActionType ) => {
  switch (action.type) {
    case INSERT_ANSWER_DATA:
      return state.concat({
        idx:action.payload.idx,
        answerIdx:action.payload.answerIdx
      })
    case REMOVE_ANSWER:
      return []

  default:
    return state;
  }
}

export const mbtiContentReducer = (state:mbtiDataState = mbtiInitalState, action: ActionType) => {
  switch (action.type) {
    case SAVE_MBTI_CONTENT :
      return {
        list:action.payload.list, 
        normal:action.payload.normal
      }

    default:
      return state;
  }
}


