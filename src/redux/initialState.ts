export type answerData = {
  idx:number,
  answerIdx:number
}
export type mbtiData = {
  list:string,
  normal:string
}

export type answerDataState = answerData[]
export type mbtiDataState = mbtiData[]

export const answerInitalState: answerDataState = []
export const mbtiInitalState: mbtiDataState = []