import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  grid-area: CO;

  width: 100%;
  height: 100%;
`

export const Content = styled.div`
    form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      
    }

    input {
      width: 70%;
      height: 35px;

      color: black;

      border-radius: 10px;
      padding: 10px;

      margin-bottom: 10px;
    }

    .checkBox {
      width: 20px;
      height: 20px;
    }

    .divColors {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        font-weight: bold;
      }

      div {
        display: flex;
        flex-direction: row;
      }
    }

    .divBtns {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .btnCreate {
        width: 100px;
        height: 30px;

        border-radius: 10px;
        
        margin-top: 10px;
        margin-right: 20px;

        color: white;
        background-color: ${colors.purple.lightPurple};
      }

      .btnCancel {
        width: 100px;
        height: 30px;

        border-radius: 10px;
        
        color: white;
        background-color: ${colors.tertiary};
        margin-top: 10px;
      }
    }
  }
`
