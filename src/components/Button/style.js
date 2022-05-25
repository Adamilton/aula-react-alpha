import styled from 'styled-components'

export const Btn = styled.button`
    width: 140px;
    height: 40px;

    border: none;
    border-radius: 34px;
    background: #0ACD86;

    font-family: "Jockey One";
    font-size: 20px;
    text-align: center;
    color: #0AAB6B;

    cursor: pointer;
    transition: 0.4s;


    &:hover, &.selected{
        background: #FFFFFF;
    }

    &.clear {
        background:#E1B84F;
    }

    &.form{
        width: 100%;
        height: 41px;
;

        border-radius: 17px;
        color: white;
        font-weight: bold;

    }

`