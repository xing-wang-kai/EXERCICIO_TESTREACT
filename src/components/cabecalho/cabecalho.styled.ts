import styled from "styled-components";

export class Comp {
    public static Header = styled.header`
        display: flex;
        justify-content: space-around;
        padding-top: 120px;

        @media screen and (max-width: 800px) {
            padding-top: 60px;
            flex-direction: column;
            align-items: center;
        }
        `

    public static ImgLogo = styled.div`
            background-image: url("imagens/logo.png");
            width: 351px;
            height: 117px;
            @media screen and (max-width: 800px) {
                background-image: url("imagens/logo-pequeno.png");
                width: 235px;
                height: 199px;
        }
    `

    public static ImgParticipantes = styled.img`
        z-index: 1;
        `
}
