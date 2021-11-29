import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${colors.primary};

  width: 40%;
  height: 95%;

  border-radius: 10px;

  margin-left: 50px;
  margin-right: 50px;

  align-items: center;
  
  text-align: center;

  h1{
    margin-top: 5px;
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: bold;
  }

  form{
    display: flex;
    flex-direction: row;

    margin-bottom: 10px;

    input {
      margin-right: 10px;
      margin-left: 5px;

      padding-left: 5px;
      border-radius: 5px;

      color: black;

      width: 80%;
      height: 25px;
    }
  }

  ul {
    width: 100%;
    height: 100%;
  }
  
`

export const Card = styled.li`
  width: 95%;
  height: 50px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;

  align-items: center;

  background-color: ${colors.tertiary};

  strong {
    margin-top: 5px;
  }
`
