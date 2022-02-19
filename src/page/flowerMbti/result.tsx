import React,{useCallback}from "react";
import { GlobalBody,FlowerRootdiv, CommonDiv } from "../../style/global-style";
import styled,{css, keyframes}from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { get_scroll_percentage } from "../../utils/scrollPerMaker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import ShareBoxFooter from "../../component/flowerMbti/shareBoxFooter";
import { scoreChecker } from "../../utils/scoreChecker";
import { removeAnswer } from "../../redux/action";
import getRandom  from "../../utils/getRandom";
import FallingFlower from "../../component/flowerMbti/fallingFlower";
import CustomAlert from "../../component/flowerMbti/customAlert";
import flowerMbtiDefaultBackImg from '../../images/flowerMbti/paper-flower-background-g7e808bf88_1920.jpg'
import InfoBoxComponent from "../../component/flowerMbti/infoBoxComponent";
import { useQuery, gql } from '@apollo/client';
import { GET_MBTICONTENT, PING } from "../../graphQl/queries";
import Loading from "../../component/loading";

const Result = ({...props}) => {
  const dispatch = useDispatch()
  let answerList = useSelector((state:RootState) => state.answerReducer);
  let mbtiCode = scoreChecker(answerList)
  mbtiCode = mbtiCode.replaceAll(",","")
  const {error, loading, data} = useQuery(GET_MBTICONTENT,{variables:{mbtiCode:mbtiCode},fetchPolicy:"cache-first"})



  const navigate = useNavigate();
  const [showRouteBox, setShowRouteBox] = useState<boolean>(true)
  const [showSectionFooter, setShowSectionFooter] = useState<boolean>(false)
  const [showInfoBox, setShowInfoBox] = useState<boolean>(false)
  const [mbtiContent, setMbti]  = useState<any>('')
  const [mbtiFlowerUrl, setMbtiFlowerUrl] = useState<string>('')
  const [alertState, setAlertState] = useState<boolean>(false)
  const [listDesc, setListDesc] = useState<string[]>(['test','test1'])
  


  const clickFlowersBtn = () => {
    
    setAlertState(true)
  }
  



  const clickReplayBtn = () => {
    dispatch(removeAnswer())
    navigate('/')
  }

  useEffect(() => {
    





    window.addEventListener("scroll", (e) => {
      if (get_scroll_percentage() >= 30) {
        setShowRouteBox(true)
      }
      if (get_scroll_percentage() >= 55) {
        setShowSectionFooter(true)
      }
      if (get_scroll_percentage() >= 75) {
        setShowInfoBox(true)
        window.removeEventListener("scroll", (e) => {
        })
      }

      window.addEventListener("onbeforeunload", (e)=>{
        console.log(e,"여기")
      })
      // console.log(window.innerHeight,"브라우저 높이")
      // console.log(document.documentElement.scrollHeight,"전체문서 높이")
      // console.log(window.scrollY,"스크롤한 높이")
    });
  },[])

    
  useEffect(()=>{
    console.log(data,"데이터")
  },[data])
  // console.log('rendering result')

  if(loading){
    console.log(data,"로딩 중")
    return (<Loading></Loading>)
  }else if(!loading){
    console.log(data,"로딩끝")
    // let arr = data.getMbtiContent.listDesc.split('.')
    // console.log(arr,"배열")
  }


    // props.client.writeQuery({
    //   query:GET_MBTICONTENT,
    //   data:{
    //     getMbtiContent:{
    //       __typename:'FlowerInfo',
    //       id:data.getMbtiContent.id,
    //       desc:data.getMbtiContent.desc,
    //       imgUrl:data.getMbtiContent.imgUrl,
    //       mbtiCode:data.getMbtiContent.mbtiCode,
    //       nickName:data.getMbtiContent.nickName,
    //       engName:data.getMbtiContent.engName,
    //       flowerName:data.getMbtiContent.flowerName,
    //       listDesc:data.getMbtiContent.listDesc
    //     },
    //   },
    //   variables:{mbtiCode:"INTJ"}
    // })

  window.onbeforeunload = () => {
    // console.log('새로고침 감지')
    
    return navigate('/project/1/result')
    // return "test"
  }



  return (
    <>
    <GlobalBody />    
    <Sample>    
      <FallingFlower></FallingFlower>
      Result Page
      <h2>결과</h2>
      <Section_wrapper>
        <SectionTitle>
          <SectionTitleNickName>{data.getMbtiContent[0].nickName}</SectionTitleNickName>
          <SectionTitleName>{data.getMbtiContent[0].flowerName}</SectionTitleName>
        </SectionTitle>
        <CustomAlert visible={alertState} backEvent={false} setAlertState={setAlertState} title={'경고'} subTitle={'불편을 드려 죄송합니다.'} msg={'아직 준비중인 기능이에요!'}></CustomAlert>
        <SectionBody>
          <MbtiFlowerImg>
            <img width='80%' src={data.getMbtiContent[0].imgUrl}></img>
          </MbtiFlowerImg>
          <SectionListContentUl>
            {data.getMbtiContent[0].listDesc.split('.').map((item:string)=>{
              console.log(item,"아이템")
              if(item === '' || item === undefined){
                
              }else{
                return <SectionListContentLi key={item}>{item}</SectionListContentLi>
              }

            })}

          </SectionListContentUl>
          <SectionContent>{data.getMbtiContent[0].desc}</SectionContent>
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
        <ShareBoxFooter mbtiFlowerUrl={data.getMbtiContent.imgUrl} mbtiContent={data.getMbtiContent}></ShareBoxFooter>
        : 
        <InvisibleSectionFooter></InvisibleSectionFooter>}
          {showInfoBox ?
            <InfoBoxComponent setAlertState={setAlertState}></InfoBoxComponent>
            : <InvisibleInfoBox></InvisibleInfoBox>}

        </Section_wrapper>
      </Sample>

    </>
    )
  }



const Sample = styled.div`
background-image: url(${flowerMbtiDefaultBackImg});
width:100%;
height:100%;
overflow:hidden;
/* background-color : #070604; */
display:flex;
flex-direction: column;
align-items: center;
/* background-color:whitesmoke;  */
color:black;
font-weight: bold;
/* background-position: fixed; */
background-size:auto;
/* background-blend-mode: difference; */
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
border-radius: 5px;
`

const SectionTitleNickName = styled.div`
font-weight:normal;
`
const SectionTitleName = styled.div`
  font-weight:bold;
  color:orange;
`

const SectionBody = styled.section`
border-radius: 5px;
width:100%;
background-color:rgba(238, 202, 155);

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

const SectionListContentUl = styled.ul`
  
`

const SectionListContentLi = styled.li`
  
`
const Section_wrapper = styled.div`
z-index:1;
padding-left: 20px;
padding-right:20px;
width:370px;
height:100%;
animation: 0.6s ease-in--out fadeInEffect;

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
animation:1.4s  ease-in--out fadeInEffect;


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


const InvisibleInfoBox = styled.div`
height:500px;
`

const MbtiFlowerImg = styled.div`
display:flex;
justify-content:center;
margin-top:14px;
margin-bottom:14px;
margin-left:20px;
margin-right:20px;
padding-top:14px;
padding-bottom: 14px;
/* height:100%; */
`





export default React.memo(Result);
