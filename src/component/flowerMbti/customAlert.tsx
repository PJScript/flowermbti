import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
const CustomAlert = ({ title, subTitle, msg, visible, setAlertState, backEvent }: any) => {
  // seAlertState 모달을 띄울 페이지에서 상태관리 true or false
  // backEvnet 모달창 배경 클릭시 모달 닫기 관리 true or false

  return (
    <>
      <AlertWrapper onClick={() => backEvent === true ? setAlertState(false) : console.log('test')} visible={visible}>
        <AlertInner>
          <AlertTitle> {title} </AlertTitle>
          <AlertSubtitle>{subTitle}</AlertSubtitle>
          <AlertMsg>{msg}</AlertMsg>
          <AlertCheckBtn className='hoverOrange' onClick={() => setAlertState(false)}>확인</AlertCheckBtn>
        </AlertInner>
      </AlertWrapper>
    </>
  )
}
export default CustomAlert

const AlertWrapper = styled.div.attrs((props)=>{

})`
display:flex;
justify-content:center;
align-items: center;
position:fixed;
background-color: rgb(90, 90, 90, 0.8);
visibility:${(props) => (props.visible === true ? 'visible' : 'hidden')};
top:0;
left:0;
bottom:0;
right:0;
margin-right:6px;
margin-left:6px;

` 

const AlertInner = styled.div`
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

const AlertTitle = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:5px;
  align-items: center;
  border-bottom: 1px solid grey;
  width:100%;
  height:100%;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top:15px;
`

const AlertSubtitle = styled.div`
  display: flex;
  justify-content:center;
  width:100%;
  height:100%;
`

const AlertMsg = styled.div`
display:flex;
justify-content:center;
background-color: whitesmoke;
margin-bottom:5px;
padding-bottom:5px;
border-bottom: 1px solid grey;
width:100%;
height:100%;
`

const AlertCheckBtn = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  max-width:70px;
  background-color:rgb(90, 90, 90, 0.8);
  color:white;
  border-radius: 6px;
`