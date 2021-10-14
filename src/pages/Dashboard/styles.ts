import styled from 'styled-components'
import { theme } from '../../styles/colors'

export const Container = styled.div`
  grid-area: CO;


  display: flex;
  flex-direction: column;

  justify-content: space-around;

  border-top-left-radius: 35px;

  margin-left: 55px;
  background-color: ${theme.colors.secondaty};
  
  .title {
    font-size: 40px;
    font-weight: bold;

    margin-top: 10px;
    margin-bottom: 5px;

    margin-left: 15px;
  }
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  width: 100%;
  height: 100%;

`
