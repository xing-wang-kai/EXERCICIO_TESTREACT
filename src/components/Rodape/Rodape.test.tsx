import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape';
import useNameList from '../../state/hook/useNameList';
import { useNavigate } from 'react-router-dom';
import { UseSorteador } from '../../Paginas/useSorteador';

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../../state/hook/useNameList.ts");
jest.mock('react-router-dom', () => {
    return {
        useNavigate: ()=> mockNavigate
    }
});

jest.mock('../../Paginas/useSorteador', () => {
    return {
        UseSorteador: () => mockSorteio
    }
});


describe("GROUP: --> When there aren't enough participants:", () => {
    beforeEach(()=>{
            (useNameList as jest.Mock).mockReturnValue([]);
    })
    it("TEST:--> So, The game cannot happen", () => {
        render(<RecoilRoot>
                    <Rodape/>
                </RecoilRoot>)
        
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    })
});

describe("GROUP:-->When there are participants:", ()=>{
    beforeEach(()=>{
        (useNameList as jest.Mock).mockReturnValue(["Jessica", "Pedro", "Elisabeth"]);
    })

    it("TEST:--> The game can start:", ()=>{
        render(<RecoilRoot>
                    <Rodape/>
                </RecoilRoot>)

        const button = screen.getByRole('button');

        expect(button).not.toBeDisabled();
    })

    it("TEST:--> The game is Begin:", () => {
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
        expect(mockSorteio).toHaveBeenCalledTimes(1);

    })
})