import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${colors.primary};

  width: 100%;
  height: 150px;

  border-radius: 10px;

  margin-left: 50px;
  margin-right: 50px;

  align-items: center;
  
`

export const Card = styled.div`
  width: 20%;
  height: 75px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;

  align-items: center;

  background-color: ${colors.tertiary};

  strong {
    margin-top: 5px;
  }
`
