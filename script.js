function validarFormulario() {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;   
    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }
}
