import styled from 'styled-components'

// HE - Header
// SB - SideBar
// CO - Content
// DE - Details
// FO - Footer

import { theme } from '../../styles/colors'

export const Grid = styled.div`
  display: grid;

  grid-template-areas: 
    'SB HE HE'
    'SB CO CO'
    'SB CO CO';

  grid-template-columns: 13% auto;
  grid-template-rows: 10%;

  background-color: ${theme.colors.primary} ;
`
