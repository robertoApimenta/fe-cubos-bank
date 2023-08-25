import React from 'react';
import { Title, Container } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

import HeaderPages from '../HeaderPages';
import { useState } from 'react';
import FormGroup from '../FormGroup';

import isEmailValid from '../../utils/isValidEmail';
import formatNumberPhone from '../../utils/formatNumberPhone';
import formatCpf from '../../utils/formatCpf';

function NewAccount() {
    const [nome, setNome] = useState('');
    const [errorNome, setErrorNome] = useState('');

    const [cpf, setCpf] = useState('');
    const [errorCpf, setErrorCpf] = useState('');

    const [data_nascimento, setData_Nascimento] = useState('');
    const [errorDataNascimento, setErrorDataNascimento] = useState('');

    const [telefone, setTelefone] = useState('');
    const [errorTelefone, setErrorTelefone] = useState('');

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [senha, setSenha] = useState('');
    const [errorSenha, setErrorSenha] = useState('')

    const [repeteSenha, setRepeteSenha] = useState('');
    const [errorRepeteSenha, setErrorRepeteSenha] = useState('');

    // mensagens de tentativa de cadastro
    const [data, setData] = useState('');

    const handleNome = (e) => {
        setNome(e.target.value);
        if (!e.target.value) {
            setErrorNome('Este campo é obrigatório');
        } else {
            setErrorNome('');
        }
    };

    const handleCpf = (e) => {
        setCpf(formatCpf(e.target.value));
        if (!e.target.value) {
            setErrorCpf('Este campo é obrigatório');
        } else {
            setErrorCpf('');
        }
    };

    const handleDataNascimento = (e) => {
        setData_Nascimento(e.target.value);
        if (!e.target.value) {
            setErrorDataNascimento('Este campo é obrigatório');
        } else {
            setErrorDataNascimento('');
        }
    };

    const handleTelefone = (e) => {
        setTelefone(formatNumberPhone(e.target.value));
        if (!e.target.value) {
            setErrorTelefone('Este campo é obrigatório');
        } else {
            setErrorTelefone('');
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value && !isEmailValid(e.target.value)) {
            setErrorEmail('E-mail com formato inválido');
        } else {
            setErrorEmail('');
        }
    };

    const handleSenha = (e) => {
        setSenha(e.target.value);
        if ((e.target.value).length < 6) {
            setErrorSenha('A senha deve possuir pelo menos 6 caracteres')
        } else {
            setErrorSenha('')
        }
    };

    const handleRepeteSenha = (e) => {
        setRepeteSenha(e.target.value);
        if (e.target.value !== senha) {
            setErrorRepeteSenha('As senhas precisam ser iguais')
        } else {
            setErrorRepeteSenha('');
        }
    };

    const formIsValid = (nome && cpf && data_nascimento && telefone && email && senha && repeteSenha && !errorRepeteSenha);

    const formSubmit = (e) => {
        e.preventDefault();
        const dadosNovaConta = { nome, cpf, data_nascimento, telefone, email, senha };

        // Configuração da requisição
        const url = 'http://localhost:8000/contas';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indica que você está enviando JSON
            },
            body: JSON.stringify(dadosNovaConta), // Converte o objeto para uma string JSON
        };

        // Realiza a requisição usando o fetch
        fetch(url, options)
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => {
                // Aqui você pode lidar com a resposta do backend (data)
                setData(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
    }

    return (
        <Container>
            <HeaderPages />
            <form onSubmit={formSubmit}>
                <Title>
                    Criar conta CubosBank
                </Title>
                <FormGroup error={errorNome}>
                    <Input
                        placeholder='Nome completo'
                        type='text'
                        value={nome}
                        onChange={handleNome}
                    />
                </FormGroup>

                <FormGroup error={errorCpf}>
                    <Input
                        placeholder='CPF'
                        type='text'
                        maxLength={14}
                        minLength={14}
                        value={cpf}
                        onChange={handleCpf}
                    />
                </ FormGroup>

                <FormGroup error={errorDataNascimento}>
                    <Input
                        placeholder='Data de nascimento'
                        type='date'
                        value={data_nascimento}
                        onChange={handleDataNascimento}
                    />
                </FormGroup>

                <FormGroup error={errorTelefone}>
                    <Input
                        placeholder='Telefone'
                        type='text'
                        maxLength={15}
                        value={telefone}
                        onChange={handleTelefone}
                    />
                </FormGroup>

                <FormGroup error={errorEmail}>
                    <Input
                        placeholder='E-mail'
                        type='email'
                        value={email}
                        onChange={handleEmail}
                    />
                </FormGroup>

                <FormGroup error={errorSenha}>
                    <Input
                        placeholder='Senha'
                        type='password'
                        value={senha}
                        onChange={handleSenha}
                    />
                </FormGroup>

                <FormGroup error={errorRepeteSenha}>
                    <Input
                        placeholder='Repita a senha'
                        type='password'
                        value={repeteSenha}
                        onChange={handleRepeteSenha}
                    />
                </FormGroup>

                <Button
                    type='submit'
                    disabled={!formIsValid}
                >
                    Criar conta
                </Button>
                {data.statusCode === 201 && <span className='success'>{data.mensagem} Você será redirecionado para a tela de login!</span>}
                {data.statusCode === 400 && <span className='error'>{data.mensagem}</span>}

            </form>
        </ Container>

    );
};

export default NewAccount;
