import React from "react";
import { GlobalBody,FlowerRootdiv, CommonDiv } from "../../style/global-style";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import flowerMbtiDefaultBackImg from '/home/js/Desktop/flowermbti/src/images/flowerMbti/flower-3490152_640.jpg'
import result1 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/roses-56702_1920.jpg'
import result2 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/pink-peony-1631344_1920.jpg'
import result3 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/poppy-192784.jpg'
import result4 from '/home/js/Desktop/flowermbti/src/images/flowerMbti/cherry-blossoms-4074651_1920.jpg'
const Result = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(true)

  
  const clickFlowersBtn = () => {
    
    navigate('/project/1/flowers')
  }
  return (
    <>
      <GlobalBody />
      <Sample>
          Result Page
          <Section_wrapper>
            <SectionTitle>
              <h2>결과</h2>
              <div style={{color:'#EAEAEA',fontWeight:'bold'}}>홍길동 <span> 님은</span></div>
              <div><span style={{color:'#FFA556', fontWeight:'bold'}}>장미</span> 가(이) 되었어요!</div>
            </SectionTitle>
            <SectionBody>
              <SectionContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </SectionContent>
          </SectionBody>
          <RouteBtnBox>
            <div className='hover' onClick={() => { navigate('/project/1') }}>다시하기</div>
            <div className='hover' onClick={clickFlowersBtn}>꽃 종류 보러가기</div>
          </RouteBtnBox>
          <SectionFooter>
            <h3>공유</h3>
            <SectionFooterContent>
              <div>친구에게 공유해 보세요!</div>
              <ShareBtnBox>
                <ShareBtnKakao>
                  <div>Kakao</div>
                </ShareBtnKakao>
                <ShareBtnFaceBook>
                  <div>faceBook</div>
                </ShareBtnFaceBook>
                <ShareBtnInstaGram>
                  <div>InstaGram</div>
                </ShareBtnInstaGram>
              </ShareBtnBox>

            </SectionFooterContent>
          </SectionFooter>

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
/* width:100%; */
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
max-width: 370px;
height:100%;

animation: 0.6s ease-in-out fadeInEffect;
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
const SectionFooter = styled.div`
color:black;
/* max-height:400px; */
height:100%;
display:flex;
flex-direction: column;
align-items:center;
border-radius: 4px;
background-color:rgb(255, 231, 231);
margin-bottom:20px;
padding-bottom:20px;
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
export default Result;