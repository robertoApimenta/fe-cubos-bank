import React from 'react';
import { Container } from './styles';

function FormGroup({ children, error }) {
    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    );
};

export default FormGroup;
