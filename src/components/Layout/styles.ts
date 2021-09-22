import styled from 'styled-components'

// HE - Header
// SB - SideBar
// CO - Content
// DE - Details
// FO - Footer

export const Grid = styled.div`
  display: grid;

  grid-template-areas: 
    'SB HE HE'
    'SB CO CO'
    'SB CO CO';
  grid-template-columns: 5%;
  grid-template-rows: 10%;
`

export const Content = styled.div`
  grid-area: CO;
  background-color: tomato;
`
