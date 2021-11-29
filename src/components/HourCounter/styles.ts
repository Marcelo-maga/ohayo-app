import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 10px;

  justify-content: center;
  align-items: center;

  width: 55%;
  height: 15%;

  background-color: ${colors.primary} ;

  margin-top: 20px;

  border-width: 2px;
  border-style: solid;
  border-color: ${colors.tertiary};

  `

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  
  strong{
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border-style: solid;
    border-width: 2px;

    border-radius: 50%;

    width: 40px;
    height: 40px;


    svg {
      width: 20px;
      height: 20px;
    }
  }

`
