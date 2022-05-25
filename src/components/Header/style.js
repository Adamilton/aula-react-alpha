import styled from 'styled-components'

export const HeaderBar = styled.header`
    position: absolute;
  
    width: 100%;
    height: 63px;
    left: 0px;
    top: 0px;
  
    background: #0acd86;
  
    display: flex;
    justify-content: space-between;

    .menu {
        width: 100%;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap:20px;

        font-family: 'Jockey One', sans-serif;
    }
  
`

export const Logo = styled.div`
  width: 120px;
  height: 100%;

  background: #0aab6b;
`

export const UserProfile = styled.div`
    width: 120px;
    display: flex;
    align-items: center;

    & img {
        width: 50px;
        cursor: pointer;
    }
`