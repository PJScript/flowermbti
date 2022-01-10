import React from "react";
import styled from "styled-components";
const FlowerInfoModal = ({visible, setVisible}:any):JSX.Element => {
  
  return (
    <>
      <ModalWrapper visible={visible} onClick={()=>setVisible(true)}>
        <ModalInner>
          <ModalTitle>test</ModalTitle>
        </ModalInner>

      </ModalWrapper>
    </>
  )
}

const ModalWrapper = styled.div.attrs(()=>{

})`
  display:flex;
  visibility:${(props)=> (props.visible === true ? 'hidden':'visible')};
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgb(90, 90, 90, 0.8);;
`

const ModalInner = styled.div`
  position:fixed;
  width:360px;
  height:560px;
  border:1px solid blue;
`

const ModalTitle = styled.h2`
  
`
export default FlowerInfoModal