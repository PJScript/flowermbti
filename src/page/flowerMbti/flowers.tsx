import React from "react";
import { GlobalBody,FlowerRootdiv } from "../../style/global-style";
import result2 from "/home/js/Desktop/flowermbti/src/images/flowerMbti/seamless-pattern.png"
import styled from "styled-components";
import '../../static/fonts/font.css'
const Flowers = () => {
  return (
    <>
      <GlobalBody />
      <FlowersPageRootDiv style={{fontFamily:'NanumPenScript',fontSize:'1.5em'}}>
        화단
        <FlowerListContainer>
          <FlowerListTitle>
            <p>아직 꽃이 많이 부족해요!</p>
            <p style={{color:"black"}}>친구에게 공유해서 꽃을 찾아주세요!</p>

          </FlowerListTitle>
          <FlowerListSection>
            가장 많이 찾은 꽃
            <FlowerListUl>
              <FlowerDiv>목련</FlowerDiv>
              <FlowerDiv>양귀비</FlowerDiv>
              <FlowerDiv>데이터가 충분하지 않아요!</FlowerDiv>
              <FlowerDiv>데이터가 충분하지 않아요!</FlowerDiv>
            </FlowerListUl>
            <span className='hoverOrange'>더보기</span>
          </FlowerListSection>
          <FlowerListSection>
          새로 발견한 꽃

          <FlowerListUl>
            <FlowerDiv>할미꽃</FlowerDiv>
            <FlowerDiv>철쭉</FlowerDiv>
            <FlowerDiv>선인장 꽃</FlowerDiv>
            <FlowerDiv>데이터가 충분하지 않아요!</FlowerDiv>
          </FlowerListUl>
          <span className='hoverOrange'>더보기</span>
          </FlowerListSection>
          <span style={{color:'#82D580'}}>24시간 기준으로 갱신됩니다!</span>
          <span style={{color:'#82D580'}}>내일은 어떤 꽃이 발견될까요!?</span>
        <GardenBtnContainer>
          <div className='hoverOrange'>정원 입장</div>
        </GardenBtnContainer>
        </FlowerListContainer>
      </FlowersPageRootDiv>
    </>
  )
}

const FlowersPageRootDiv = styled.div`
width:100%;
height:100%;
background-color:grey;
display:flex;
flex-direction: column;
align-items: center;
background-image: url(${result2});
color:white;
background-position:bottom;
background-size:100%;
background-blend-mode: difference;
/* background-repeat:no-repeat; */
/* background-position: center; */
background-attachment: fixed;
`
const FlowerListContainer = styled.div`
height:100%;
display:flex;
align-items: center;
flex-direction: column;
/* justify-content: space-between; */
`

const FlowerListTitle = styled.div`
display:flex;
flex-direction: column;
`

const FlowerListUl = styled.ul`
display:flex;
list-style-type: none;
flex-wrap: wrap;
justify-content:flex-start;
border:1px solid green;
background-color: green;
margin:0;
margin-top:10px;
@media screen and (max-width:1338px){   /** -216px */
  width:1030px;
}
@media screen and (max-width:1086px){
  width:780px;
}
@media screen and (max-width:828px){
  width:530px;
}
@media screen and (max-width:580px){
  width:270px;
}
@media screen and (max-width:325px){
  width:100%;
}
`

const FlowerListSection = styled.section`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:70px;
padding:0;
`
const FlowerDiv = styled.li`
  display:flex;
  align-items: center;
  justify-content: center;
  font-family:'NanumPenScript';
  font-size:26px;
  width:230px;
  height:160px;
  list-style-type:none;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:10px;
  background-size: cover;
  background-position: center;
  border:1px solid red;
  background-color:orangered;
`

const GardenBtnContainer = styled.div`
display:flex;
margin-top:20px;
`
export default Flowers;