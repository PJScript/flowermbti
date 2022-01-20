import {gql} from '@apollo/client'

export const GET_USERS = gql`
  query getUser($id: Float!){
    getUser(id:$id){
    id,
    email
  }
}
`

export const GET_MBTICONTENT = gql`
  query getMbtiContent($mbtiCode:String!){
    getMbtiContent(mbtiCode:$mbtiCode){
      id,
      mbtiCode,
      listDesc,
      desc,
      imgUrl,
      nickName,
      flowerName,
      engName
    }
  }
`

export const GET_MBTICONTENT_IMG_NAME = gql`
  query getMbtiContent{
    getMbtiContent{
      id,
      mbtiCode,
      listDesc,
      imgUrl,
      flowerName,
      engName,
      nickName
    }
  }
`

export const PING = gql`
  query {
    ping 
  }
`