export const INSERT_ANSWER_DATA = 'INSERT_ANSWER_DATA' as const;



export const insertAnswer = (idx:number, answerIdx:number) => ({ 
  type : INSERT_ANSWER_DATA,
  payload : {
    idx:idx,
    answerIdx:answerIdx
  }
});




export type ActionType = 
| ReturnType<typeof insertAnswer>