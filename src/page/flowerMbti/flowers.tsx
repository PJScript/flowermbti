import React from "react";
import { GlobalBody,FlowerRootdiv } from "../../style/global-style";
import styled from "styled-components";
const Flowers = () => {
  return (
  <>
    <GlobalBody />
    <FlowerRootdiv>
    Flowers Page
      <FlowerListContainer>
      <p>아직 발견된 꽃이 없어요!</p>
        <p>친구에게 공유해서 꽃을 찾아주세요!</p>
        <FlowerDiv></FlowerDiv>
        <FlowerDiv></FlowerDiv>
        <FlowerDiv></FlowerDiv>

      </FlowerListContainer>
    </FlowerRootdiv>
  </>
  )
}


const FlowerListContainer = styled.ul`
width:100px;
height:100%;
display:flex;
flex-direction: column;
justify-content: space-between;
`
const FlowerDiv = styled.div`
width:200px;
height: 100px;
border:1px solid red;
`
export default Flowers;