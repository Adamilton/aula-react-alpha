import styled from 'styled-components'

export const FormsContainer = styled.div`
    width: calc(100vw - 320px);
    height: 212px;
    left: 117px;

    background: #F2F2F2;
    margin: 0 auto;
    margin-top: 104px;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 50px;
    padding:0 40px;

    input {
        height: 41px;
        background: #FFFFFF;
        border-radius: 17px;

        border: 0px;
    }

    .inputs {
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;
        gap: 20px;


    }

    .buttons {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;
        gap: 20px;
    }

    .description {
    width: 100%;
    }

    .date, .local {
    width: 45%;
    }
  
`