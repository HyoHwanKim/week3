import React, { useState } from 'react'
import styled from 'styled-components'
import Butten from './Butten'
import ModalBasic from './ModalBasic'
import ModalBasic2 from './ModalBasic2'

const BtnList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
`

const FirstBtn = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid ${(props) => props.borderColor};
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`

const Small = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor};
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`

function Modal() {

  const [modalOpen, setModalOpen] = useState(false)
  const showModal = () => {
    setModalOpen(true)
  }

  const [modalOpen2, setModalOpen2] = useState(false)
  const showModal2 = () => {
    setModalOpen2(true)
  }

  return (
    <div>
        <h1>Modal</h1>
        <BtnList>
          <Small backgroundColor="rgb(85, 239, 196)" onClick={showModal}>open modal</Small>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
          <FirstBtn borderColor="rgb(250, 177, 160)" onClick={showModal2}>open modal</FirstBtn>
          {modalOpen2 && <ModalBasic2 setModalOpen2={setModalOpen2} />}
        </BtnList>
    </div>
  )
}

export default Modal
