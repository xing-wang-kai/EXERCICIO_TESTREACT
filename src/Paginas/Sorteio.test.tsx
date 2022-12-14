import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GetNameList from '../state/hook/GetNameList';
import Sorteio from './Sorteio';

jest.mock('../state/hook/GetNameList.ts')

describe("GROUP:--> Page to carry out the draw", () => {
    beforeEach( ( ) => {
        (GetNameList as jest.Mock).mockReturnValue(["ANAMELIA", "PATRICIA", "FERNANDA"])
    })
    test('should:--> All participants will be able to display their secret friend:', () => {
        render(<RecoilRoot>
                    <Sorteio/>
                </RecoilRoot>)
      
        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(3);
    })
    
})