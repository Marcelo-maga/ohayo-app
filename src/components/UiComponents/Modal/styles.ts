import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Container = styled.div`
  display: flex;

  position: absolute;
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


  justify-content: center;
  align-items: center;
  
  position: absolute;

  border-radius: 20px;


  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .btnClose {
    display: flex;

    float: right;
    margin-right: 20px;
    margin-top: 10px;
    font-weight: bolder;
    color: ${colors.purple.lightPurple};

    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border-style: solid;
    border-color: white;
    border-width: 2px;
    border-radius: 50%;
  }

  background-color: ${colors.secondary};
`
