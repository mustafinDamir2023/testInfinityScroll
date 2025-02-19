import React from 'react'
import { MainWrapper, WrapperBlock } from './oneItem.stylles'

export const OneItem = ({ item }) => {
  return (
    <MainWrapper>
      <WrapperBlock>
        <h3>{item.name}</h3>
        <div>{item.email}</div>
      </WrapperBlock>
    </MainWrapper>
  )
}
