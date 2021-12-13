import styled, { createGlobalStyle } from "styled-components";
import defaultBackImage from '/home/js/Desktop/flowermbti/src/images/flower-3490152_640.jpg'
export const Rootdiv = styled.div`
  display:flex;
  flex-direction: column;
  height : 100vh;
  width : 100%;
  align-items: center;
  background-color : #070604;
  color:white;
  opacity:0.95;
  background-image : url(${defaultBackImage});
  background-size: auto;
  background-repeat : no-repeat;
  background-position : bottom;
  @media screen and (max-height:593px) { 
    background-position-y:7px;
  }
`;

export const GlobalBody = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`



