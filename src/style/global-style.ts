import styled, { createGlobalStyle } from "styled-components";
import defaultBackImage from '/home/js/Desktop/flowermbti/src/images/flower-3490152_640.jpg'
export const Rootdiv = styled.div`
  /* display : flex; */
  height : 100vh;
  width : 100%;
  background-color : #070604;
  opacity:0.95;
  background-image : url(${defaultBackImage});
  background-size: auto;
  background-repeat : no-repeat;
  background-position : bottom;
	/* padding-top : calc (300/2000*100%); */
`;

export const GlobalBody = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`



