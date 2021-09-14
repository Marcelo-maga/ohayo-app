import styled from 'styled-components'

// HE - Header
// SB - SideBar
// CO - Content
// DE - Details
// FO - Footer

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    'SB HE'
    'CO CO'
    'CO CO';
`
