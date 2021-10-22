import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);

`

export const Content = styled.div`
  width: 70%;
  height: 70%;

  position: absolute;

  border-radius: 20px;

  justify-content: center;

  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;

  }

  background-color: ${colors.secondary};
`
