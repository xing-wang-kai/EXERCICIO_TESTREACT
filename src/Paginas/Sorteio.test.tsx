import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import useNameList from '../state/hook/useNameList';
import Sorteio from './Sorteio';
import { useResultadoSorteio } from '../state/hook/useResultadoSorteio';

jest.mock('../state/hook/useNameList.ts')
jest.mock('../state/hook/useResultadoSorteio.ts', () => { 
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe("GROUP:--> Page to carry out the draw", () => {
    const participantes = [
        'ANA',
        'CATARINA',
        'AMELIA'
    ]

    const resultado = new Map([
        ['ANA', 'CATARINA'],
        ['CATARINA', 'AMELIA'],
        ['AMELIA', 'ANA']
    ])

    beforeEach( ( ) => {
        (useNameList as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('should:--> All participants will be able to display their secret friend:', () => {
        render(<RecoilRoot>
                    <Sorteio/>
                </RecoilRoot>)
      
        const options = screen.queryAllByRole('option');
        //porque uma option veem por padrão então add valor +1
        expect(options).toHaveLength(participantes.length + 1);
    })

    it("SHOULD:--> The secret friend will only be displayed when requested:", ( ) => {
        render(<RecoilRoot>
            <Sorteio/>
        </RecoilRoot>)

        const select = screen.getByPlaceholderText("Selecione o seu nome");

        fireEvent.change( select, {
            target: {
                value: participantes[0]
            }
        })

        const button = screen.getByRole('button');
        
        fireEvent.click(button);

        const amigoSecreto = screen.getByRole('alert');

        expect(amigoSecreto).toBeInTheDocument();
    })

    
})