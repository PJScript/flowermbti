import React from "react";
import { GlobalBody,Rootdiv } from "../style/global-style";
import styled from "styled-components";
const Flowers = () => {
  return (
  <>
    <GlobalBody />
    <Rootdiv>
    Flowers Page
      <Sample>
        <p>아직 발견된 꽃이 없어요!</p>
        <p>친구에게 공유해서 꽃을 찾아주세요!</p>
      </Sample>
    </Rootdiv>
  </>
  )
}
const Sample = styled.div`
display:flex;
flex-direction: column;
`
export default Flowers;