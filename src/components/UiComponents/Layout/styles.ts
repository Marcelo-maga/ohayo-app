import styled from 'styled-components'

// HE - Header
// SB - SideBar
// CO - Content
// DE - Details
// FO - Footer

import { colors } from '../../../styles/theme'

export const Grid = styled.div`
  display: grid;
  
  width: 100%;
  height: 100vh;

  grid-template-areas: 
    'SB CO CO'
    'SB CO CO'
    'SB CO CO';

  grid-template-columns: 0 5%;
  grid-template-rows: 13%;

  background-color: ${colors.primary} ;
`
