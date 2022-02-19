import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { faceBookShareBtn } from "./shareBtn/faceBookShareBtn";
import { kakaoShareBtn } from "./shareBtn/kakaoShareBtn";
import kakao from '/home/js/Desktop/flowermbti/src/static/shareIcon/kakaolink_btn_medium_ov.png'
import faceBook from '/home/js/Desktop/flowermbti/src/static/shareIcon/facebook.png'
const ShareBoxFooter = ({mbtiFlowerUrl,mbtiContent,templateId}:any):JSX.Element => {
  return (
    <>
      <SectionFooter>
        <h3>공유</h3>
        <SectionFooterContent>
          <div>주변에 공유해 주세요!</div>
          <ShareBtnBox>
            <ShareBtnKakao className='hover' onClick={() => kakaoShareBtn('test', templateId, mbtiFlowerUrl, mbtiContent)} src={kakao}></ShareBtnKakao>
            <ShareBtnFaceBook className='hover' onClick={() => faceBookShareBtn()}></ShareBtnFaceBook>
          </ShareBtnBox>
        </SectionFooterContent>
        <Comment>
          더 많은 소셜 공유 기능이 추가될 예정 이에요!
        </Comment>

      </SectionFooter>
    </>
  )
}

export default ShareBoxFooter

const SectionFooter = styled.div`
display:flex;
color:black;
/* max-height:400px; */
width:100%;
height:100%;
flex-direction: column;
align-items:center;
border-radius: 4px;
background-color:rgb(245, 245, 245,0.7); /* whitesmoke */
border:1px solid black;
margin-bottom:20px;
padding-bottom:20px;
animation:0.7s  ease-in--out fadeInEffect;
@keyframes fadeInEffect {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
const InvisibleSectionFooter = styled.div`
display:flex;
flex-direction: column;
align-items:center;
height:500px;
width:100%;

`
const SectionFooterContent = styled.div`
/* background-color:blue; */
border:1px solid grey;
border-radius: 4px;
padding:4px;

`

const ShareBtnBox = styled.ul`
display:flex;
padding:0px;
list-style-type: none;
justify-content: space-around;

/* border:1px solid grey; */

`

const ShareBtnKakao = styled.img`
background-color: whitesmoke;
width:50px;
height:50px;
`

const ShareBtnFaceBook = styled.img`
background-color: whitesmoke;
width:50px;
height:50px;
`
ShareBtnFaceBook.defaultProps = {
  src: faceBook
}

const ShareBtnInstaGram = styled.li`
color:black;
font-weight: bold;
background-color: pink;
margin-bottom:10px;
`

const Comment = styled.p`
color:grey;
`