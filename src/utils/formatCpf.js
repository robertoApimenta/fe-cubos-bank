export default function formatCpf(cpf) {
    // return cpf
    //     .replace(/\D/g, '') // Remove caracteres não numéricos
    //     .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara do CPF (###.###.###-##)
    const numericCpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    let formattedCpf = '';

    for (let i = 0; i < numericCpf.length; i++) {
        if (i === 3 || i === 6) {
            formattedCpf += '.';
        } else if (i === 9) {
            formattedCpf += '-';
        }
        formattedCpf += numericCpf[i];
    }

    return formattedCpf;
}