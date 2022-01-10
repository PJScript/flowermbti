import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
const Loading = ({ msg }: any) => {
  let [visible, setAlertState] = useState<Boolean>(true)
  // seAlertState 모달을 띄울 페이지에서 상태관리 true or false
  // backEvnet 모달창 배경 클릭시 모달 닫기 관리 true or false
  useEffect(()=>{ 
    setTimeout(()=>{
      console.log('test')
      setAlertState(false)
    },3000)
  },[])

  return (
    <>
      <LoadingWrapper visible={visible}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
          <div>꽃밭으로 걸어가는중..</div>
        </div>
        {/* <LoadingMsg>{msg}</LoadingMsg>
          <LoadingCheckBtn className='hoverOrange' onClick={() => setAlertState(false)}>확인</LoadingCheckBtn> */}
      </LoadingWrapper>
    </>
  )
}
export default Loading

const LoadingWrapper = styled.div.attrs((props)=>{

})`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items: center;
position:fixed;
background-color:white;
/* background-image:white; */
z-index:2;
visibility:${(props) => (props.visible === true ? 'visible' : 'hidden')};
top:0;
left:0;
bottom:0;
right:0;
margin-right:6px;
margin-left:6px;

` 

const LoadingInner = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  width:100%;
  background-color:whitesmoke;
  color:black;
  font-weight: bold;
  max-width: 360px;
  height:180px;
  border-radius: 5px;
  padding-bottom:5px;
`


const LoadingMsg = styled.div`
display:flex;
justify-content:center;
background-color: whitesmoke;
margin-bottom:5px;
padding-bottom:5px;
border-bottom: 1px solid grey;
width:100%;
height:100%;
`

const LoadingCheckBtn = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  max-width:70px;
  background-color:rgb(90, 90, 90, 0.8);
  color:white;
  border-radius: 6px;
`