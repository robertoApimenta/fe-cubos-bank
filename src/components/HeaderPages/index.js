import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/images/arrow.svg';

import { Container } from './styles';

function HeaderPages() {
    return (
        <Container>
            <Link to='/'>
                <img src={Arrow} alt='Seta para voltar' />
            </Link>
            <Link to='/'>
                <h1>Voltar</h1>
            </Link>
        </ Container>
    );
};

export default HeaderPages;
