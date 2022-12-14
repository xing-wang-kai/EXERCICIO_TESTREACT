import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ParticipantesList from './ParticipantesList';
import useNameList from '../../state/hook/useNameList';

jest.mock('../../state/hook/useNameList');

describe('GROUP:--> Testes comportamento lista de participantes:', ()=> {
    
    beforeEach(()=> {
        (useNameList as jest.Mock).mockReturnValue([]);
    })
    it("TEST:--> uma lista vazia de participantes:", () => {
        
        render(
            <RecoilRoot>
              <ParticipantesList/>
            </RecoilRoot>
            );

        const itens = screen.queryAllByRole('listItem');
        expect(itens).toHaveLength(0);
    });

    
    
})

describe("GROUP:--> Quando a lista está preenchida:", ()=> {

    beforeEach(()=> {
        (useNameList as jest.Mock).mockReturnValue(['ana Carolina', 'milena'])
    })
    const participantes = ['carolina', 'catarina'];

    it("TEST:--> Uma lista de Participantes deve retornar valores:", () => {
        render(
            <RecoilRoot>
              <ParticipantesList/>
            </RecoilRoot>
            );

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})