import { Comp } from "./cabecalho.styled"

export const HeaderComponent = () => {
    return(
        <Comp.Header>
            <Comp.ImgLogo role="img" aria-label='Logo do Sorteador'></Comp.ImgLogo>
            <Comp.ImgParticipantes src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </Comp.Header>
    )    
} 