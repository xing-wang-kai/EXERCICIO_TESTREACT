import styled from "styled-components";

export default class Comp{

    public static section = styled.section`
        margin: 64px 0;
        color: #FE652BFC;
        font-size: 25px;
    `

    public static p = styled.p`
        color: #FE652BFC;
        font-size: 25px;
        font-size: 20px;
        font-weight: 200;
        margin: 32px 0;
        `

    public static footer = styled.footer`
        margin: 64px 0;
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
        margin: 16px 0;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:hover {
            background-color: #4B69FD;
        }

        @media screen and (max-width: 800px) {
            width: 220px;
            margin: 32px 0;
        }
    `

    public static select = styled.select`
        border-radius: 45px;
        height: 82px;
        width: 70%;
        box-sizing: border-box;
        padding: 0 32px;
        font-size: 20px;
        border: 2px solid black;
        box-shadow: 0px 2px 0px 1px #000000;

        &:focus{
            outline: none;
        }

        @media screen and (max-width: 800px) {
            width: 100%;
        }
    
        `

}