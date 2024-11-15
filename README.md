Gerenciamento de Tarefas API 🚀
Bem-vindo ao meu projeto de gerenciamento de tarefas!
Este repositório contém a API RESTful para gerenciar tarefas, com funcionalidades completas de CRUD (Create, Read, Update, Delete), autenticação JWT e documentação interativa Swagger. Tudo isso em um ambiente Dockerizado para garantir uma configuração rápida e simples.

Desenvolvido por: Diego Felix 💻

📋 Sobre o Projeto
Este projeto é uma API RESTful para gerenciamento de tarefas, ideal para quem busca controlar tarefas de maneira simples e eficiente. A API permite a criação, leitura, atualização e exclusão de tarefas, além de fornecer autenticação de usuários com JWT (JSON Web Token). A documentação está acessível através de Swagger, oferecendo uma interface interativa para testar os endpoints de forma prática e eficiente.

🔧 Funcionalidades
Operações CRUD: Crie, leia, atualize e exclua tarefas.
Autenticação JWT: Crie e faça login de usuários com geração de token JWT para segurança.
Validação de Dados: Garantia de que todos os dados enviados pela API estejam corretos.
Documentação Interativa: Acesse a documentação da API de forma simples através de Swagger UI.
Dockerização: O projeto é totalmente dockerizado, permitindo fácil execução e escalabilidade.
🚀 Como Rodar o Projeto
1. Clonar o Repositório
Clone o repositório para sua máquina local:

bash
Copiar código
git clone https://github.com/seu-usuario/gerenciamento-tarefas-api.git
2. Instalar Dependências
Dentro da pasta do projeto, instale as dependências utilizando o NPM:

bash
Copiar código
npm install
3. Rodar o Projeto com Docker
Se você quiser rodar a aplicação em um ambiente Docker, basta rodar o seguinte comando para construir e iniciar o container:

bash
Copiar código
docker-compose up --build
Se preferir rodar sem Docker, inicie a aplicação localmente com:

bash
Copiar código
npm start
Agora, sua API estará disponível em http://localhost:3000!

📝 Documentação Interativa (Swagger)
Acesse a documentação interativa da API e teste os endpoints diretamente no navegador:

bash
Copiar código
http://localhost:3000/api-docs
A documentação foi gerada automaticamente com Swagger, oferecendo uma interface amigável para explorar e testar todos os recursos da API.

⚙️ Tecnologias Utilizadas
Node.js e Express para criação da API.
JWT (JSON Web Token) para autenticação de usuários.
Swagger UI para a documentação da API.
Docker para conteinerização da aplicação.
PostgreSQL ou SQLite (conforme sua escolha) para persistência de dados.
📜 Como Contribuir
Fique à vontade para contribuir com o projeto! Para isso, basta seguir os passos abaixo:

Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b feature/nova-feature).
Faça suas alterações e commite (git commit -am 'Adicionando nova feature').
Push para a sua branch (git push origin feature/nova-feature).
Abra um Pull Request com suas mudanças.
🏆 Demonstração
Aqui está um exemplo de como a API pode ser acessada após rodar a aplicação:

GET /tasks: Retorna a lista de todas as tarefas.
POST /tasks: Cria uma nova tarefa.
GET /tasks/{id}: Retorna detalhes de uma tarefa específica.
PUT /tasks/{id}: Atualiza uma tarefa existente.
DELETE /tasks/{id}: Exclui uma tarefa.


👨‍💻 Desenvolvido por
Diego Felix
GitHub | LinkedIn | Portfólio

