import styled from 'styled-components';

export default class Comp {
    public static footer = styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 800px) {
            flex-direction: column;
    `
    public static button = styled.button`
        width: 350px;
        height: 80px;
        font-size: 20px;
        box-shadow: 2px 2px 0px 1px #000000;
        border-radius: 45px;
        background-color: #FE652B;
        color: #FFF;
        cursor: pointer;
        &:hover{
            background-color: #4B69FD; 
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;  
        }
        @media screen and (max-width: 800px) {
                margin-top: 32px;
        }
    `
    public static img = styled.img`
        @media screen and (max-width: 800px) {
            margin-top: 32px;
    `

    public static h4 = styled.h4`
        display: block;
        color: darkgray;
        font-size: 1.5rem;
        font-family: cursive;
        text-align: center;
        padding: 1.5rem;
    `
}