<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1, h2, h3 {
      color: #333;
    }
    pre {
      background-color: #eee;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    code {
      font-family: "Courier New", Courier, monospace;
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
    }
    .btn {
      display: inline-block;
      padding: 10px 15px;
      font-size: 16px;
      color: #fff;
      background-color: #007BFF;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 10px;
    }
    .btn:hover {
      background-color: #0056b3;
    }
    .note {
      background-color: #e7f3fe;
      padding: 10px;
      border-left: 6px solid #2196F3;
      margin-bottom: 20px;
    }
  </style>
  <title>Gerenciamento de Transporte de Pacientes</title>
</head>
<body>
  <div class="container">
    <h1>Gerenciamento de Transporte de Pacientes</h1>
    <p>Bem-vindo ao sistema de gerenciamento de transporte de pacientes do Hospital Geral Clériston Andrade. Este sistema visa facilitar e otimizar as atividades dos maqueiros, proporcionando um serviço mais eficiente e seguro aos usuários.</p>

    <h2>Características</h2>
    <ul>
      <li>Agendamento de transporte de pacientes</li>
      <li>Rastreamento de pacientes</li>
      <li>Gestão de prioridades</li>
      <li>Registro de incidentes</li>
      <li>Acesso seguro e restrito</li>
    </ul>

    <h2>Requisitos do Sistema</h2>
    <pre><code>Node.js
Fastify
MongoDB
</code></pre>

    <h2>Instalação</h2>
    <ol>
      <li>Cloque o repositório:
        <pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></pre>
      </li>
      <li>Instale as dependências:
        <pre><code>cd seu-repositorio
npm install</code></pre>
      </li>
      <li>Configure as variáveis de ambiente:
        <pre><code>cp .env.example .env</code></pre>
        Edite o arquivo <code>.env</code> com suas configurações.
      </li>
      <li>Inicie o servidor:
        <pre><code>npm start</code></pre>
      </li>
    </ol>

    <h2>Endpoints da API</h2>
    <h3>Pacientes</h3>
    <ul>
      <li><code>POST /pacientes</code> - Cria um novo paciente</li>
      <li><code>GET /pacientes</code> - Obtém todos os pacientes</li>
      <li><code>GET /pacientes/:id</code> - Obtém um paciente específico por ID</li>
      <li><code>PUT /pacientes/:id</code> - Atualiza um paciente específico por ID</li>
      <li><code>DELETE /pacientes/:id</code> - Deleta um paciente específico por ID</li>
    </ul>

    <h3>Transportes</h3>
    <ul>
      <li><code>POST /transportes</code> - Cria uma nova solicitação de transporte</li>
      <li><code>GET /transportes</code> - Obtém todas as solicitações de transporte</li>
      <li><code>GET /transportes/:id</code> - Obtém uma solicitação de transporte específica por ID</li>
      <li><code>PUT /transportes/:id/status</code> - Atualiza o status de uma solicitação de transporte (aceitar/recusar)</li>
      <li><code>PUT /transportes/:id/prioridade</code> - Atualiza a prioridade de uma solicitação de transporte</li>
      <li><code>PUT /transportes/:id/incidente</code> - Registra um incidente ou problema durante o transporte</li>
      <li><code>PUT /transportes/:id/localizacao</code> - Atualiza a localização e o status do paciente durante o transporte</li>
    </ul>

    <h3>Usuários</h3>
    <ul>
      <li><code>POST /register</code> - Registra um novo usuário</li>
      <li><code>POST /login</code> - Faz login no sistema</li>
      <li><code>GET /users/:id</code> - Obtém informações de um usuário específico (requer autenticação)</li>
    </ul>

    <h2>Segurança</h2>
    <p>Este sistema utiliza tokens JWT para autenticação e autorização. Certifique-se de manter suas chaves seguras e configure as variáveis de ambiente adequadamente.</p>

    <h2>Contribuição</h2>
    <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.</p>

    <a href="https://github.com/seu-usuario/seu-repositorio" class="btn">Visite o Repositório</a>
  </div>
</body>
</html>
