<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="../style.css" type="text/css">
</head>
<body id="pCadastro">
    <div class="containerCad">
        <form id="cadastro" onsubmit="return validarFormulario()">
            <h1 id="cad">Cadastro</h1>
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" required></input>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>

            <label for="senha">Senha</label>
            <input type="password" id="senha" name="senha" required></input>

            <button type="submit">Cadastrar</button>
        </form>
    </div>

    <footer>
        <button onclick="window.location.href='home.html'">Home</button>
    </footer>
    
    <script src="../script.js"></script>
    <script>
        function validarFormulario() {
            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            
            if (nome === '' || email === '' || senha === '') {
                alert{'Por favor, preencha todos os campos obrigatórios.'};
                return false; // Impede o envio do formulário
            {"}"}
        {"}"}
    </script>
</body>
</html>
