import { useSelector } from "react-redux"
import { RootState } from "../../redux"

type scoreData = {
  idx:number;
  answerIdx:number;
}

export const scoreChecker = (data:any):any => {
  let score_EI :any
  let score_SN :any
  let score_TF :any
  let score_JP :any

  if(data.length !== 12){
    return 'answer data length error please retry more slowly'
  }else{
    const mbti_EI = data.slice(0,3)
    const mbti_SN = data.slice(3,6)
    const mbti_TF = data.slice(6,9)
    const mbti_JP = data.slice(9,12)

    score_EI = scoreParser(mbti_EI,score_EI,['E','I'])
    score_SN = scoreParser(mbti_SN,score_SN,['S','N'])
    score_TF = scoreParser(mbti_TF,score_TF,['T','F'])
    score_JP = scoreParser(mbti_JP,score_JP,['J','P'])
  }
  console.log(`
  EI = ${score_EI.box}, ${score_EI.alphabetQueue} 
  SN = ${score_SN.box}, ${score_SN.alphabetQueue} 
  TF = ${score_TF.box}, ${score_TF.alphabetQueue} 
  JP = ${score_JP.box}, ${score_JP.alphabetQueue}
  `)
  const result_EI:string = alphabetParser(score_EI.alphabetQueue,['E','I'])
  const result_SN:string = alphabetParser(score_SN.alphabetQueue,['S','N'])
  const result_TF:string = alphabetParser(score_TF.alphabetQueue,['T','F'])
  const result_JP:string = alphabetParser(score_JP.alphabetQueue,['J','P'])

  return `${result_EI},${result_SN},${result_TF},${result_JP}`

}

const scoreParser = (arr:Array<any>, box:number, alphabet:Array<string>) => {   // 각 항목별 점수 확인 후 모두 더함
  box = 0;
  let alphabetQueue = []
  for(let i=0; i<=arr.length-1; i++){  

      if(arr[i].answerIdx === 0){
        alphabetQueue.push(alphabet[0])
        box = box + 2
      }else if(arr[i].answerIdx === 1){
        alphabetQueue.push(alphabet[0])
        box = box + 1
      }else if(arr[i].answerIdx === 2){
        alphabetQueue.push(alphabet[1])
        box = box + 2
      }else if(arr[i].answerIdx === 3){
        alphabetQueue.push(alphabet[1])
        box = box + 1
      }
  }
  return { box:box, alphabetQueue:alphabetQueue }
}

const alphabetParser = (alphabetArray:Array<string>, standardArray:Array<string>) => {
  let testObj :any = {}  // 객체에 key value를 할당 할 수 없어서 any 타입으로 줌

  for(let i=0; i<=alphabetArray.length-1; i++){
    let callKey = alphabetArray[i]

    if(callKey in testObj){
      testObj[callKey] = testObj[callKey] + 1
    }else{
      testObj[callKey] = 1
    }
  }

  if(testObj[standardArray[0]] === 3){
    return standardArray[0] 
  }else if(testObj[standardArray[0]] > testObj[standardArray[1]]){
    return standardArray[0]
  }else if(testObj[standardArray[0]] < testObj[standardArray[1]]){
    return standardArray[1]
  }else if(!testObj[standardArray[0]]){
    return standardArray[1]
  }else{
    return ''
  }
}


// 몇번을 선택 했는지 객체 속에 담겨있음.
// 경우의 수 1 1 1, 1 1 2, 1 2 2, 2 2 2, 2 2 1, 2 1 1, 1 2 1, 2 1 2, 
//             3     4       5     6       5     4       4     5