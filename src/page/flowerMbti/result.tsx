import React from "react";
import { GlobalBody,FlowerRootdiv } from "../../style/global-style";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Result = () => {
  const navigate = useNavigate();
  return (
  <>
    <GlobalBody />
    <FlowerRootdiv>
    Result Page
      <Sample>
        <p>결과 페이지에요.</p>
        <p>풀무원 님은 백련이 되었어요.</p>
        <p>백련의 꽃말은 '순결' 입니다.</p>
      </Sample>
      <div className='hover' onClick={()=>{navigate('/project/1')}}>다시하기</div>
      <div className='hover' onClick={()=>{navigate('/flowers')}}>꽃 종류 보러가기</div>
    </FlowerRootdiv>
  </>
  )
}

const Sample = styled.div`
display:flex;
flex-direction: column;
`
export default Result;