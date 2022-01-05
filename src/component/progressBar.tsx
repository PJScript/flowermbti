import React from "react";
import styled from "styled-components";
const ProgressBar = ({length,nowNum}:any):JSX.Element => {
  const percentage = Math.floor(nowNum / length * 100)
  return (
    <>      

      <PercentageWrapper>
        <PercentageInner percentage={percentage}>
          <PercentageTextBox>
          {percentage}%
          </PercentageTextBox>
        </PercentageInner>

      </PercentageWrapper>
    </>
  )
}

export default ProgressBar


const PercentageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  max-width:300px;
  border:1px solid black;
  border-radius:5px;
  margin-top:20px;
  font-family:'Shizuru';
  font-weight: bold;
  font-size:1.1rem;
  overflow:hidden;
`

const PercentageInner = styled.div.attrs((props) => {

})`
  width:${(props) => props.percentage}%;
  max-width:300px;
  background-color:${(props => props.percentage >=50 ? "green" : "grey")};
`

const PercentageTextBox = styled.div`
width:100%;
text-align: right;

`

const RotateCircle = styled.div`
  position:absolute;

  width:300px;
  height:300px;
  border-radius:45%;
  background-color: red;
  animation: rotate 2s infinite linear;
  @keyframes rotate {
    100%{
      transform: rotate(360deg);
    }

}
`