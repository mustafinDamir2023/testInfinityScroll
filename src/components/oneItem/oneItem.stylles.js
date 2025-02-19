import styled from '@emotion/styled'

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const WrapperBlock = styled.div`
  width: 50%;
  height: 200px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: transform 0.3s; /* Плавный переход для трансформации */

  &:hover {
    transform: scale(1.05); /* Увеличение блока на 5% */
  }
`
