import styled, { createGlobalStyle } from "styled-components";
import flowerMbtiDefaultBackImg from '/home/js/Desktop/flowermbti/src/images/flowerMbti/paper-flower-background-g7e808bf88_1920.jpg'
export const FlowerRootdiv = styled.div`
  display:flex;
  flex-direction: column;
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
  @media screen and (max-height:593px) { 
    background-position-y:7px;
  }
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



