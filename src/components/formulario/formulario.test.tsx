
import {  act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe("GROUP:--> Testes Comportamento Formulário:", ()=> {
    test('TEST:--> Quando o input está vázio, novos participantes não podem ser adicionado:', () => {

        render(<RecoilRoot><Formulario/></RecoilRoot>);
        const input = screen.getByPlaceholderText("Insira o nome dos participantes");
        const botao = screen.getByRole("button");
    
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    })
    
    test('TEST:--> Adicionar um participante no hook recoil caso exista um nome preenchido:', () =>{
        render(<RecoilRoot><Formulario/></RecoilRoot>);
        const input = screen.getByPlaceholderText("Insira o nome dos participantes");
        const botao = screen.getByRole("button");
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'ana carolina'
            }
        })
        //clicar no botão submeter
        fireEvent.click(botao);      
        // garatir que o input estevja com o foto alvo
        expect(input).toHaveFocus();
        //garantir que o input não tenha um valor
        expect(input).toHaveValue("");
    })
    it("TEST:--> Quando adicionar um nome na lista ele não poderá ser duplicata:", () => {
        render(
                <RecoilRoot><Formulario/></RecoilRoot>
                );
        const input = screen.getByPlaceholderText("Insira o nome dos participantes");
        const botao = screen.getByRole("button");
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'ana carolina'
            }
        })
        fireEvent.click(botao);
        fireEvent.change( input, {
            target: {
                value: 'ana carolina'
            }
        })
        //clicar no botão submeter
        fireEvent.click(botao);
        //pegar mensagem de error.
        const messagemError = screen.getByRole('alert');

        expect(messagemError.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    it('TEST:--> Messagem de error deverá sumir após 5 segundos', () =>{

        jest.useFakeTimers()

        render(
            <RecoilRoot><Formulario/></RecoilRoot>
            );
        const input = screen.getByPlaceholderText("Insira o nome dos participantes");
        const botao = screen.getByRole("button");
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'ana carolina'
            }
        })
        fireEvent.click(botao);
        fireEvent.change( input, {
            target: {
                value: 'ana carolina'
            }
        })
        //clicar no botão submeter
        fireEvent.click(botao);
        //pegar mensagem de error.
        let messagemError = screen.queryByRole('alert');
        expect(messagemError).toBeInTheDocument();
        act(()=>{
            jest.runAllTimers()
        })
        
        messagemError = screen.queryByRole('alert');
        //expect(messagemError).toBeNull();

    })
})


