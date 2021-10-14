import styled from 'styled-components'
import { theme } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 80%;

  border-radius: 20px;
  border: 1px solid #ffff;

  text-align: center;
  margin-left: 15px;
  background-color: ${theme.colors.terc};
  
  h1 {
    margin-top: 20px;
    
    font-size: 20px;
    font-weight: 600;
  }
  strong {
    margin-top: 20px;
    margin-left: 15px;
    text-align: start;
  }
`
