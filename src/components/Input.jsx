import React, { useState } from 'react'
import styled from 'styled-components'

const InputList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const Cinput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`

const Cbutton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`

function Input() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const formatPrice = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleChangePrice = (e) => {
    setPrice(formatPrice(e.target.value))
  }

  const handleClick = () => {
    alert(`이름: ${name}, 가격: ${price}`)
  }

  return (
    <div>
      <h1>Input</h1>
      <InputList>
        이름<Cinput type='text' value={name} onChange={(e) => setName(e.target.value)}></Cinput>
        가격<Cinput type='text' value={price} onChange={handleChangePrice} autoFocus ></Cinput>
        <Cbutton onClick={handleClick}>저장</Cbutton>
      </InputList>
    </div>
  )
}

export default Input
