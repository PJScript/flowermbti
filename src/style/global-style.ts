import styled, { createGlobalStyle } from "styled-components";
import flowerMbtiDefaultBackImg from "../images/flowerMbti/paper-flower-background-g7e808bf88_1920.jpg"
export const FlowerRootdiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height : 100vh;
  width : 100%;
  align-items: center;
  background-color : #070604;
  /* overflow-y: hidden; */
  color:black;
  opacity:0.95;
  background-image : url(${flowerMbtiDefaultBackImg});
  background-size:auto;
  background-repeat : no-repeat;
  background-position : bottom;
  background-attachment: fixed;
`

export const CommonDiv = styled.div`
  display:flex;
  flex-direction: column;
  height : 100%;
  width : 100%;
  align-items: center;
  background-color :whitesmoke;
  background-size: auto;
  background-repeat : no-repeat;
  background-position : bottom;
`

export const GlobalBody = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
`



