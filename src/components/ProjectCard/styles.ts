import styled from 'styled-components'

export const Container = styled.button`
  border-radius: 15px;

  width: 45%;
  height: 250%;
  background-color: #282828;
`

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  
  h3{
    margin-right: 15px;
  }

  .Avatar{
    position: absolute;
    margin-top: 25px;
    margin-left: 25px;
  }
`

export const Color = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  height: 45%;

  background-color: blueviolet;
`
