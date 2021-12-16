import React from "react";
import { GlobalBody, FlowerRootdiv,CommonDiv } from "../style/global-style";
import styled from "styled-components";
import biographyImage from '/home/js/Desktop/flowermbti/src/images/flowerMbti/biography.png'
import dataAnalyticsImage from '/home/js/Desktop/flowermbti/src/images/flowerMbti/dataAnalytics.png'
import marbleImage from '/home/js/Desktop/flowermbti/src/images/flowerMbti/marble.png'
import flowerMbitImg from '/home/js/Desktop/flowermbti/src/images/flowerMbti/testThumbnail/flowerMbtiThumbnail.png'
import { useNavigate } from "react-router";
// import '../App.css'
const Home = (): JSX.Element => {
  let navigate = useNavigate();
  return (
    <>
      <GlobalBody />
      <CommonDiv>
        <Header>
          <HeaderTitleBox>
            <HamberGerMenu>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list hover" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </HamberGerMenu>
            <HeaderTitle>인생 연구소</HeaderTitle>
          </HeaderTitleBox>
        </Header>
        <MainContentBox>
          <Section>
            <SectionTitle>미리 체험 해보기(Beta)</SectionTitle>
            <SectionContent>
                <SectionContentli className="hover" onClick={()=>{navigate('/project/1')}}></SectionContentli>
            </SectionContent>
          </Section>
          <AdBox>AD.</AdBox>
          <Section>
            <SectionTitle>section2</SectionTitle>
            <SectionContent>content</SectionContent>
          </Section>

          <Section>
            <SectionTitle>section2</SectionTitle>
            <SectionContent>content</SectionContent>
          </Section>
        </MainContentBox>
      </CommonDiv>
    </>

  )
}

const Header = styled.div`
box-sizing: border-box;
justify-content:space-between;
font-size:23px;
font-weight:bold;
text-align:center;
width:100%;
height:13vh;
border:1px solid red;
background-color:skyblue;
background-image: url(${dataAnalyticsImage});
background-repeat:no-repeat;
background-position-y:40%;
background-position-x:2%;
@media screen and (max-width:530px){
  background-image:none;
}
`
const HamberGerMenu = styled.div`
display:none;
@media screen and (max-width:530px){
  display:flex;
  margin-right:-30px;  /** 햄버거 메뉴 크기 30px **/
}
`

const HeaderTitleBox = styled.div`
display:flex;
align-items:center;
width:100%;
height:100%;
background-image: url(${biographyImage});
background-repeat:no-repeat;
background-position-x:44.1%;
`

const HeaderTitle = styled.div`
width:100%;
`


const MainContentBox = styled.div`
  width:100%;
  height:99vh;  /**임시 값 */
  margin-top:20px;  
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  background-image:url(${marbleImage});
  background-repeat: no-repeat;
  background-size: cover;
`
const Section = styled.section`
display: flex;
flex-direction: column;
align-items:center;
box-sizing:border-box;
border:1px solid red;
padding-left:20px;
padding-right:20px;
margin-top:3px;
width:100%;
height:100%;
background-repeat: no-repeat;
background-size: cover;

`

const SectionTitle = styled.div`
/* width:100%; */
box-sizing:border-box;
border:1px solid red;
margin-top:5px;
/* text-align: left; */
`
const SectionContent = styled.ul`

display:flex;
box-sizing:border-box;
border:1px solid blue;
margin: 0 auto;
flex-wrap: wrap;
justify-content:flex-start;
padding-left:20px;
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
/* @media screen and (max-width:1338px){
  width:1080px;
} */
`

const SectionContentli = styled.li`
  display:inline-block;
  width:230px;
  height:160px;
  list-style-type:none;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:10px;
  background-image: url(${flowerMbitImg});
  background-size: cover;
  background-position: center;
`

const AdBox = styled.div`
width:80%;
height:auto;
`
export default Home