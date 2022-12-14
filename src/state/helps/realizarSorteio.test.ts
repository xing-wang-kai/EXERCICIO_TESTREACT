
import { realizarSorteio } from "./realizarSorteio";

describe("GROUP:--> For Every Secret Draw", ()=> {
    it('SHOULD: --> Participant cannot draw his own name:', ( ) => {
        const participantes = [
            'catarina',
            'maria',
            'joao',
            'pedro',
            'miguel'
        ]

        const sorteio = realizarSorteio(participantes);

        participantes.forEach( name => {
            const amigoSecreto = sorteio.get(name);
            expect(amigoSecreto).not.toEqual(name);
        })
    })
})