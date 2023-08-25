import React from 'react';

import Logo from '../../assets/images/logo-horizontal-academy2.svg';

import { Container } from './styles'

function Header() {
    return (
        <Container>
            <img src={Logo} alt='Logo cubos academy' />
        </ Container>
    )
};

export default Header;
