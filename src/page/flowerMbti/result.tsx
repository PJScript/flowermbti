import React from "react";
import { GlobalBody,FlowerRootdiv, CommonDiv } from "../../style/global-style";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import flowerMbtiDefaultBackImg from '/home/js/Desktop/flowermbti/src/images/flowerMbti/flower-3490152_640.jpg'
import { dummy } from "../../dummy";
import result1 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/roses-56702_1920.jpg'
import result2 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/leaf-g6e755a8b7_1920-removebg.png'
import result3 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/poppy-192784.jpg'
import result4 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/cherry-blossoms-4074651_1920.jpg'

import { get_scroll_percentage } from "../../component/scrollPerMaker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import ShareBoxFooter from "../../component/flowerMbti/shareBoxFooter";
import { scoreChecker } from "./scoreChecker";
import dummyContent from "../../component/flowerMbti/dummyContent";
import { removeAnswer } from "../../redux/action";
import test from "/home/js/Desktop/flowermbti/src/static/resultSmallImg/royalAzalea.jpg"

const Result = () => {
  const dispatch = useDispatch()
  let answerList = useSelector((state:RootState) => state.answerReducer);
  let mbtiContentList = useSelector((state:RootState) => state.mbtiContentReducer);
  const navigate = useNavigate();
  const [showRouteBox, setShowRouteBox] = useState<boolean>(true)
  const [showSectionFooter, setShowSectionFooter] = useState<boolean>(false)
  const [showInfoBox, setShowInfoBox] = useState<boolean>(false)
  const [mbtiContent, setMbti]  = useState<any>('')
  const [mbtiFlowerUrl, setMbtiFlowerUrl] = useState<string>('')
  const [mbtiFlowerName, setMbtiFlowerName] = useState<string>('')
  const [mbtiFlowerNickName, setMbtiFlowerNickName] = useState<string>('')
  const testFnc = (e:any) => {
    console.log(e)
    console.log(test)
    e.target.setAttribute('src',result2)
  }
  const clickFlowersBtn = () => {
    alert('아직 오픈 전이에요!')
    // navigate('/project/1/flowers')
  }

  const clickReplayBtn = () => {
    navigate('/')
    dispatch(removeAnswer())
  }
  useEffect(()=>{
    // dummyContent(answerList)
    let mbti = scoreChecker(answerList)
    mbti = mbti.replaceAll(",","")
    let resultMbti = dummyContent(mbti)
    setMbti(resultMbti)
    setMbtiFlowerUrl(resultMbti.img)
    setMbtiFlowerName(resultMbti.flowerName)
    setMbtiFlowerNickName(resultMbti.nickName)
    window.addEventListener("scroll",(e)=>{
      if(get_scroll_percentage() >= 30){
        setShowRouteBox(true)
      }
      if(get_scroll_percentage() >= 55){
        setShowSectionFooter(true)
      }
      if(get_scroll_percentage() >= 75){
        setShowInfoBox(true)
      }
      // console.log(window.innerHeight,"브라우저 높이")
      // console.log(document.documentElement.scrollHeight,"전체문서 높이")
      // console.log(window.scrollY,"스크롤한 높이")
    });

  },[])

  useEffect(()=>{
    console.log(mbtiFlowerUrl,"꽃 주소")
  },[mbtiFlowerUrl])
  return (
    <>
      <GlobalBody />
      <Sample>
          Result Page
          <h2>결과</h2>
        <Section_wrapper>
          <SectionTitle>
          <div style={{ color: '#EAEAEA', fontWeight: 'bold' }}>{mbtiFlowerNickName}<span></span></div>
            <div><span style={{ color: '#FFA556', fontWeight: 'bold' }}>{mbtiFlowerName}</span></div>
          </SectionTitle>
          <SectionBody>
            <MbtiFlowerImg>
              <img width='100%' src={mbtiFlowerUrl}></img>
            </MbtiFlowerImg>

            <SectionContent>{mbtiContent.list}</SectionContent>
            <SectionContent>{mbtiContent.normal}</SectionContent>
          </SectionBody>
          {showRouteBox ?
            <RouteBtnBox>
              <div className='hover' onClick={clickReplayBtn}>다시하기</div>
              <div className='hover' onClick={clickFlowersBtn}>정원 들어가기</div>
            </RouteBtnBox>
            :
            <InvisibleRouteBtnBox></InvisibleRouteBtnBox>
          }
          {showSectionFooter ?
          <ShareBoxFooter></ShareBoxFooter>
          : 
          <InvisibleSectionFooter></InvisibleSectionFooter>}
          {showInfoBox ?           
          <InfoBox>
            <h3>문의 / 요청사항</h3>
            <p>이용해 주셔서 갑사합니다.</p>
            <p style={{color:'black',fontWeight:'bold'}}>문의 사항과 피드백 환영 합니다.</p>
            <div>직접 이메일로 보내시거나 </div>
            <div>아래 버튼을 통해 보내주세요 !</div>
            <p><button>문의하기</button></p>
            <div>이메일 : webtestlife@gmail.com</div>
            <span>트위터 : <a target='_blank' href='https://twitter.com/testweblife'>https://twitter.com/testweblife</a> </span>
          </InfoBox>
          :<InvisibleInfoBox></InvisibleInfoBox>}

          </Section_wrapper>
      </Sample>
    </>
  )
}

const Sample = styled.div`
width:100%;
height:100%;
background-color : #070604;
display:flex;
flex-direction: column;
align-items: center;

background-color:black;
color:white;
/* background-position: fixed; */
background-size:100%;
background-blend-mode: difference;
/* background-repeat:no-repeat; */
/* background-position: center; */
background-attachment: fixed;
`


const SectionTitle = styled.section`
display:flex;
flex-direction:column;
align-items: center;
font-size:1.2em;
/* mix-blend-mode: difference; */
background-color:grey;
`

const SectionBody = styled.section`
border-radius: 5px;
width:100%;
background-color:rgba(238, 202, 155, 0.8);

/* height:100vh; */
/* overflow-y: scroll; */
`
const SectionContent = styled.div`
display:flex;
width:cover;
word-break:keep-all;
height:100%;
margin-top:14px;
margin-bottom:14px;
margin-left:20px;
margin-right:20px;
padding-top:14px;
padding-bottom: 14px;

`
const Section_wrapper = styled.div`
padding-left: 20px;
padding-right:20px;
width:370px;
height:100%;
animation: 0.6s ease-in-out fadeInEffect;

@media screen and (max-width:433px){
  width:89%;
}
@keyframes fadeInEffect {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
const RouteBtnBox = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding-top:5px;
padding-bottom:5px;
margin-bottom:15px;
background-color:rgba(241, 205, 44, 0.7);
color:black;
font-weight: bold;
border-radius: 4px;
width:100%;
height:100%;
animation:1.4s  ease-in-out fadeInEffect;


@keyframes fadeInEffect {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
const InvisibleRouteBtnBox = styled.div`
display:flex;
`
const SectionFooter = styled.div`
display:flex;
color:black;
/* max-height:400px; */
width:100%;
height:100%;
flex-direction: column;
align-items:center;
border-radius: 4px;
background-color:rgb(255, 231, 231);
margin-bottom:20px;
padding-bottom:20px;
animation:0.7s  ease-in-out fadeInEffect;
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

const InfoBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  background-color: rgb(125,125,125,0.9);
  margin-bottom:20px;
  padding-bottom:20px;
  border-radius: 4px;
  word-break:keep-all;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  animation:0.7s  ease-in-out fadeInEffect;
  @keyframes fadeInEffect {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
const InvisibleInfoBox = styled.div`
height:500px;
`

const MbtiFlowerImg = styled.div`
display:flex;



margin-top:14px;
margin-bottom:14px;
margin-left:20px;
margin-right:20px;
padding-top:14px;
padding-bottom: 14px;
/* height:100%; */

`
export default Result;
