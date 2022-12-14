import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape';
import GetNameList from '../../state/hook/GetNameList';
import { useNavigate } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock("../../state/hook/GetNameList.ts");
jest.mock('react-router-dom', () => {
    return {
        useNavigate: ()=> mockNavigate
    }
});


describe("GROUP: --> When there aren't enough participants:", () => {
    beforeEach(()=>{
            (GetNameList as jest.Mock).mockReturnValue([]);
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
        (GetNameList as jest.Mock).mockReturnValue(["Jessica", "Pedro", "Elisabeth"]);
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
        expect(mockNavigate).toHaveBeenCalledWith("/sorteio")

    })
})