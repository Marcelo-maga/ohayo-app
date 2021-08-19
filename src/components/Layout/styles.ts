import styled from 'styled-components'

// HE - Header
// SB - SideBar
// CO - Content
// DE - Details

export const Grid = styled.div`

  grid-template-columns: 775px auto auto;
  grid-template-rows: 105px auto auto;

  grid-area: 
    'SB CO DE'
    'SB CO DE'
    'SB CO DE';

  height: 100vh;
`
