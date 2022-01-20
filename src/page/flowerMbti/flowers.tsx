import React from "react";
import { GlobalBody, FlowerRootdiv } from "../../style/global-style";
import result2 from "/home/js/Desktop/flowermbti/src/images/flowerMbti/paper-flower-background-g7e808bf88_1920.jpg"
import TestImg from "/home/js/Desktop/flowermbti/src/images/fallingflowerIcon/cherryBlossomIcon.png"
import styled from "styled-components";
import '../../static/fonts/font.css'
import dummyContent from "../../component/flowerMbti/dummyContent";
import FlowerInfoModal from "../../component/flowerMbti/flowerInfoModeal";
import { useState } from "react";
import ShareBoxFooter from "../../component/flowerMbti/shareBoxFooter";
import InfoBoxComponent from "../../component/flowerMbti/infoBoxComponent";
import CustomAlert from "../../component/flowerMbti/customAlert";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeAnswer } from "../../redux/action";
import Loading from "../../component/loading";
const Flowers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [visible, setVisible] = useState<Boolean>(true)
  const [alertState, setAlertState] = useState<Boolean>(false)
  
  const explodeBtn = useCallback(()=>{

  },[]) 

  const clickReplayBtn = () => {
    dispatch(removeAnswer())
    navigate('/')
  }

  let test:any[] =  []
  test.push(
    dummyContent('INTJ'),
    dummyContent('INTP'),
    dummyContent('ENTJ'),
    dummyContent('ENTP'),
    dummyContent('INFJ'),
    dummyContent('INFP'),
    dummyContent('ENFJ'),
    dummyContent('ENFP'),
    dummyContent('ISTJ'),
    dummyContent('ISFJ'),
    dummyContent('ESTJ'),
    dummyContent('ESFJ'),
    dummyContent('ISTP'),
    dummyContent('ISFP'),
    dummyContent('ESTP'),
    dummyContent('ESFP'),
  )
  const clickImg = (t:any) => {

    setVisible(false)
  }
  const flowerListMaker = () => {
  
  }
  // console.log('rendering flowers')
  return (
    <>
    
      <GlobalBody />
      <Loading ></Loading>
      <CustomAlert visible={alertState} backEvent={false} setAlertState={setAlertState} title={'경고'} subTitle={'불편을 드려 죄송합니다.'} msg={'아직 준비중인 기능이에요!'}></CustomAlert>
      <FlowerInfoModal visible={visible} setVisible={setVisible}></FlowerInfoModal>
      <FlowersPageRootDiv style={{fontFamily:'NanumPenScript',fontSize:'1.5em'}}>
        화단
        <FlowerListContainer>
          <FlowerListTitle>
            <p style={{ color: "black" }}>친구에게 공유해서 더 많은 꽃을 찾아주세요!</p>

          </FlowerListTitle>

          {/* <FlowerListSection> */}
          <FlowerListUl>
              {test.map((item, idx) => {
                // console.log(item, "아이템")
                FlowerImg.defaultProps = {
                  src: item.img
                }
                  return (
                    <>
                      <FlowerLi>
                        <CardFront>
                        <FlowerImg></FlowerImg>
                        <FlowerImgTitle onClick={explodeBtn}>{item.flowerName}</FlowerImgTitle>
                        </CardFront>
                        <CardBack>
                          <>{item.nickName} <br></br>{item.flowerName}</>
                        </CardBack>
                      </FlowerLi>
                  </>
                )
              })}
          </FlowerListUl>
          <GameBtnBox>
            <div className="hover" onClick={()=>alert('준비중 입니다! 곧 추가됨')}>미니게임 하러가기</div>
          </GameBtnBox>
          {/* </FlowerListSection> */}

          {/* <span className='hoverOrange'>더보기</span>
          <span style={{color:'#82D580'}}>24시간 기준으로 갱신됩니다!</span>
          <span style={{color:'#82D580'}}>내일은 어떤 꽃이 발견될까요!?</span> */}

          <GardenBtnContainer>
            {/* <div className='hoverOrange'>정원 입장</div> */}

            <p>재밌게 이용 하셨다면 공유 부탁드려요!</p>
          </GardenBtnContainer>
          <ToolBtnBox>
            <ShareBoxFooter></ShareBoxFooter>
          <RouteBtnBox>
            <div className='hover' onClick={()=> alert('준비중 입니다.')}>다른 테스트 하러가기</div>
            <div className='hover' onClick={clickReplayBtn}>시작하기</div>
          </RouteBtnBox>
            <InfoBoxComponent setAlertState={setAlertState}></InfoBoxComponent>

          </ToolBtnBox>

        </FlowerListContainer>

      </FlowersPageRootDiv>

    </>
  )
}

const FlowersPageRootDiv = styled.div`
/* width:100%; */
height:100%;
display:flex;
flex-direction: column;
align-items: center;
background-image: url(${result2});
background-position:bottom;
background-size:cover;
background-blend-mode: difference;
background-repeat:no-repeat;
background-position: center;
background-attachment: fixed;
`
const FlowerListContainer = styled.div`
overflow:hidden;
width:100%;
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
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-items: center;
/* justify-content: center; */
width:95%;
max-width:900px;
list-style-type: none;
border:1px solid green;
/* background-color:rgb(253, 246, 237,0.9); */
background-color:rgb(223, 195, 160,0.8);
border-radius:6px;
margin:0px;
margin-top:10px;
padding:0px;
padding-top:10px;
padding-bottom:5px;

@media screen and (max-width:610px){
    width:95vw;
    height:auto;
  }
@media screen and (max-width:400px){ 
  grid-template-columns: 1fr 1fr;
  justify-items: space-beetween;
}

`
const FlowerLi = styled.li`  
/* border-left:1px solid grey;
border-right:1px solid grey;
border-top:1px solid grey;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px; */
border:1px solid grey;
border-radius:6px;
/* outline:1px solid grey; */
transform-style: preserve-3d;
transition: transform 1s;
perspective:2000px;
width:150px;
height:167px;
margin-bottom:10px;
max-height: 180px;
display:flex;
flex-direction: column;
text-align: center;
position:relative;
font-family:'NanumPenScript';
padding-bottom:10px;


&:hover{
  transform: rotateY(180deg);
}

  @media screen and (max-width:660px){
  width:22vw;
  height:24vw;  
  font-size:1.2rem;
  }
  @media screen and (max-width:400px){ 
    width:120px;
    height:150px;
  }
  @media screen and (max-width:279px){
    width:43vw;
    height:60vw;
  }
`
const CardFront = styled.section`  
  display:flex;
  width:100%;
  height:100%;
  flex-direction: column;
  justify-content:space-between;
  /* border:1px solid grey;
  border-radius: 6px; */
  transform:rotateY(0deg);
  z-index:1;
  position:absolute;
  background-color:rgb(245, 245, 245,0.95);

  border-radius:6px;
`

const CardBack = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:150px;
  height:100%;
  max-height: 167px;
  transform:rotateY(180deg);
  z-index:2;
  position:absolute;
  background-color:rgba(238, 202, 155,0.5);
  /* background-color:rgb(245, 245, 245,0.5); */
  border-radius:6px;
  padding-bottom:13px;

  @media screen and (max-width:660px){
  width:22vw;
  /* height:23.5vw;   */
  }
  @media screen and (max-width:400px){ 
    width:120px;
    /* height:142px; */
  }
  @media screen and (max-width:279px){
    width:43vw;
    /* height:87%; */
  }
`



const FlowerImg = styled.img`
  width:160px;
  height:160px;
  max-width:150px;
  max-height:150px;
  /* border:1px solid red; */
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  @media screen and (max-width:660px){
    width:22vw;
    height:22vw;
  }
  @media screen and (max-width:400px){ 
    width:120px;
    height:120px;
  }
  @media screen and (max-width:279px){
    width:43vw;
    height:43vw;
  }
`

const ToolBtnBox = styled.div`
  width:95%;
  max-width:400px;
  
  /* @media screen and (max-width:660px){
  width:22vw;
  height:30vw;  
  }
  @media screen and (max-width:400px){ 

  }
  @media screen and (max-width:279px){

  } */
`

const FlowerImgTitle = styled.div`
  width:100%;
  /* border-left:1px solid rgba(238,202,155); */
  height:auto;
  background-color:black;
  color:white;  

  /* margin-right:-1px; */
  /* border:1px solid rgba(238, 202, 155); */
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
`


const GardenBtnContainer = styled.div`
display:flex;
margin-top:20px;
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
max-width:900px;
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

const GameBtnBox = styled.p`
  width:95%;
  max-width:400px;
  height:100%;
  text-align: center;
  background-color:rgba(241,205,44,0.9);
  border-radius:6px;
`
export default Flowers;