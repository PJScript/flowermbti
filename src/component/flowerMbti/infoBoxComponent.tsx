import React from "react";
import styled from "styled-components";
const InfoBoxComponent = ({setAlertState}:any) => {

  return (
    <>
      <InfoBox>
        <h3>문의 / 요청사항</h3>
        <p style={{ color: 'black', fontWeight: 'bold' }}>문의 사항과 피드백은 아래 주소로 보내주세요 !</p>
        {/* <div>직접 이메일로 보내시거나 </div> */}
        {/* <div>아래 버튼을 통해 보내주세요 !</div> */}

        {/* <p><button onClick={() => setAlertState(true)}>문의하기</button></p> */}
        <div>
          <p><span>이메일: </span><span style={{fontFamily:'돋움', fontSize:'1.1rem', backgroundColor:'white'}}>webtestlife@gmail.com</span></p>
        </div>
        <span>트위터 : <a target='_blank' href='https://twitter.com/testweblife'>https://twitter.com/testweblife</a> </span>
      </InfoBox>
    </>
  )
}
export default InfoBoxComponent

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
