import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Configure from './Configure';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: ()=> mockNavigate
    }
});

describe('GROUP:--> The Configure Page:', () => {
  it("TEST:--> needs to be rendered correctly:", ()=>{
    const { container } = render(<RecoilRoot><Configure/></RecoilRoot>)

    expect( container ).toMatchSnapshot();

  })

  
})
 