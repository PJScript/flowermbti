export const INSERT_ANSWER_DATA = 'INSERT_ANSWER_DATA' as const;
export const REMOVE_ANSWER = 'REMOVE_ANSWER' as const;
export const SAVE_MBTI_CONTENT = 'SAVE_MBTI_CONTENT' as const;

export const insertAnswer = (idx:number, answerIdx:number) => ({ 
  type : INSERT_ANSWER_DATA,
  payload : {
    idx:idx,
    answerIdx:answerIdx
  }
});

export const saveMbtiContent = (list:string, normal:string) => ({
  type : SAVE_MBTI_CONTENT,
  payload : {
    list:list,
    normal:normal
  }
})
export const removeAnswer = () => ({
  type : REMOVE_ANSWER
})


export type ActionType = 
| ReturnType<typeof insertAnswer>
| ReturnType<typeof removeAnswer>
| ReturnType<typeof saveMbtiContent>
