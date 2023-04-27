import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  /* pointer-events: none; */

`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  pointer-events: auto;
  width: 300px;
  height: 200px;
  /* transform: translate(-50%, -50%); */
`

const CircleBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`

function ModalBasic2({ setModalOpen2 }) {
    return (
        <ModalWrapper onClick={() => setModalOpen2(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <p>닫기 버튼 1개가 있고,</p>
                <p>외부 영역을 누르면 모달이 닫혀요</p>
                <CircleBtn onClick={() => setModalOpen2(false)}>X</CircleBtn>
            </ModalContent>
        </ModalWrapper>
    )
}

export default ModalBasic2
