import React from "react";
import styled from "styled-components";
const ShareBoxFooter = ():JSX.Element => {

  return(
    <>
    <SectionFooter>
    <h3>공유</h3>
    <SectionFooterContent>
      <div>친구에게 공유해 보세요!</div>
      <ShareBtnBox>
        <ShareBtnKakao className="hover">
          <div onClick={()=>alert('준비중입니다.')}>Kakao</div>
        </ShareBtnKakao>
        <ShareBtnFaceBook className="hover">
          <div onClick={()=>alert('준비중입니다.')}>faceBook</div>
        </ShareBtnFaceBook>
        <ShareBtnInstaGram className="hover">
          <div onClick={()=>alert('준비중입니다.')}>InstaGram</div>
        </ShareBtnInstaGram>
      </ShareBtnBox>
    </SectionFooterContent>
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
background-color:whitesmoke;
border:1px solid black;
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