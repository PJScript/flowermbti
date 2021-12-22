import React from "react";
import { GlobalBody,FlowerRootdiv, CommonDiv } from "../../style/global-style";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import flowerMbtiDefaultBackImg from '/home/js/Desktop/flowermbti/src/images/flowerMbti/flower-3490152_640.jpg'
import { dummy } from "../../dummy";
import result1 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/roses-56702_1920.jpg'
import result2 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/pink-peony-1631344_1920.jpg'
import result3 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/poppy-192784.jpg'
import result4 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/cherry-blossoms-4074651_1920.jpg'
import { get_scroll_percentage } from "../../component/scrollPerMaker";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import rootReducer, { RootState } from "../../redux";

const Result = () => {
  let answerList = useSelector((state:RootState) => state);
  const navigate = useNavigate();
  const [showRouteBox, setShowRouteBox] = useState<boolean>(true)
  const [showSectionFooter, setShowSectionFooter] = useState<boolean>(false)
  const [showInfoBox, setShowInfoBox] = useState<boolean>(false)
  const [randomNum, setRandomNum] = useState<number>(Math.floor(Math.random()*100))
  const clickFlowersBtn = () => {
    
    navigate('/project/1/flowers')
  }

  useEffect(()=>{
    console.log(answerList,"값")
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

  })
  return (
    <>
      <GlobalBody />
      <Sample>
          Result Page
          <Section_wrapper>
            <SectionTitle>
              <h2>결과</h2>
              <div style={{color:'#EAEAEA',fontWeight:'bold'}}>홍길동 <span> 님은</span></div>
            <div><span style={{ color: '#FFA556', fontWeight: 'bold' }}>{dummy[randomNum].flower}</span> 가(이) 되었어요!</div>
          </SectionTitle>
          <SectionBody>
            <SectionContent>{dummy[randomNum].content}</SectionContent>
          </SectionBody>
          {showRouteBox ?
            <RouteBtnBox>
              <div className='hover' onClick={() => { navigate('/') }}>다시하기</div>
              {/* <div className='hover' onClick={() => { navigate('/project/1') }}>다시하기</div> */}
              <div className='hover' onClick={clickFlowersBtn}>꽃 종류 보러가기</div>
            </RouteBtnBox>
            :
            <InvisibleRouteBtnBox></InvisibleRouteBtnBox>
          }
          {showSectionFooter ?
          <SectionFooter>
            <h3>공유</h3>
            <SectionFooterContent>
              <div>친구에게 공유해 보세요!</div>
              <ShareBtnBox>
                <ShareBtnKakao className="hover">
                  <div>Kakao</div>
                </ShareBtnKakao>
                <ShareBtnFaceBook className="hover">
                  <div>faceBook</div>
                </ShareBtnFaceBook>
                <ShareBtnInstaGram className="hover">
                  <div>InstaGram</div>
                </ShareBtnInstaGram>
              </ShareBtnBox>

            </SectionFooterContent>
          </SectionFooter>
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
background-image: url(${result2});
color:white;
background-position: cover;
background-size:100% auto;
background-blend-mode: difference;
background-repeat:no-repeat;
/* background-position: center; */
background-attachment: fixed;

`


const SectionTitle = styled.section`
display:flex;
flex-direction:column;
align-items: center;
font-size:1.2em;
mix-blend-mode: difference;
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
min-height: 200px;
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
const SectionFooterContent = styled.div`
/* background-color:blue; */
border:1px solid grey;
border-radius: 4px;
padding:4px;

`

const ShareBtnBox = styled.ul`
display:flex;
flex-direction:column;
text-align: center;
padding:0px;
list-style-type: none;

/* border:1px solid grey; */

`

const ShareBtnKakao = styled.li`
color:black;
font-weight:bold;
background-color:yellow;
margin-bottom:10px;
`

const ShareBtnFaceBook = styled.li`
color:whitesmoke;
font-weight:bold;
background-color: blue;
margin-bottom:10px;
`

const ShareBtnInstaGram = styled.li`
color:black;
font-weight: bold;
background-color: pink;
margin-bottom:10px;
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
export default Result;
