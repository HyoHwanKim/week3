import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  pointer-events: auto;
  width: 500px;
  height: 300px;
`
const ModalBtn = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor};
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    margin: 2px;
`

function ModalBasic({ setModalOpen }) {
  return (
    <ModalWrapper onClick={() => setModalOpen(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <p>닫기와 확인 버튼이 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
        <ModalBtn onClick={() => setModalOpen(false)} backgroundColor="rgb(250, 177, 160)" >닫기</ModalBtn>
        <ModalBtn backgroundColor="rgb(85, 239, 196)">확인</ModalBtn>
      </ModalContent>
    </ModalWrapper>
  )
}

export default ModalBasic
