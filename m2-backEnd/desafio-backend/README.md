# 🗂️ Desafio do Módulo 2 - Back-end ✅

Este repositório foi criado para a resolução do desafio do Módulo 2 do curso "Desenvolvimento de Software - Foco em Backend", oferecido pela Cubos Academy em parceria com o iFood. Aqui, você encontrará detalhes sobre o projeto em si, incluindo a descrição do desafio e as validações necessárias. Além disso, serão apresentadas instruções claras sobre como acessar e executar o projeto.

## 🚀 Descrição do Desafio 

O objetivo é criar uma API para um Banco Digital. Este é um projeto **piloto**, o que significa que futuramente outras funcionalidades serão implementadas, portanto, os dados do banco (nome, agência, etc.) serão imutáveis.

A RESTful API deve permitir:

-   Criar contas bancárias
-   Listar contas bancárias
-   Atualizar os dados do usuário da conta bancária
-   Excluir contas bancárias
-   Realizar depósitos em contas bancárias
-   Efetuar saques de contas bancárias
-   Transferir valores entre contas bancárias
-   Consultar saldo de contas bancárias
-   Emitir extrato bancário

## 🛠️ Como Começar 

Siga as instruções abaixo para configurar o projeto em sua máquina local.

### 📋 Pré-requisitos 

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/Download)
### 📦 Clonar o Repositório 

Abra seu terminal e execute o seguinte comando para clonar este repositório:

```bash
git clone https://github.com/alinelombardi/desafio-backend-m02-b2bt05.git
```

### ⚙️ Instalar Dependências 

Navegue até o diretório do projeto:

```bash
cd desafio-backend-m02-b2bt05
```

Instale as dependências usando o npm (Node Package Manager):

```bash
npm install
```

### ▶️ Executar o Projeto 

Para executar o projeto, utilize o seguinte comando:

```bash
npm start
```

O servidor Express será iniciado e estará ouvindo na porta 3000. Você pode alterar a porta de execução modificando o arquivo `index.js`. **Lembre-se de também alterar a porta nas coleções abaixo.**

## 🧪 Testando as Rotas 

Para testar as rotas da API, você pode usar ferramentas como o Postman ou o Insomnia.

1. Abra o Postman ou o Insomnia.
2. Crie uma nova requisição para a rota desejada, por exemplo: `GET http://localhost:3000/contas`.
3. Envie a requisição e observe a resposta.

## 📊 Dados 

Os dados são adquiridos a partir do objeto preexistente no arquivo `bancodedados.js`. **Todas as transações e contas bancárias são incorporadas a este objeto, mantendo a estrutura existente.** Ao encerrar o servidor, quaisquer testes realizados (adição, remoção, modificação) são redefinidos, restaurando o estado original.

## 🚪 Endpoints 

A seguir, você encontrará o link para a coleção no Postman e/ou Insomnia para realizar os testes, bem como os endpoints:

### [Coleção Postman](./src/database/collection_postman.json) e [Insomnia](./src/database/collection_insomnia.json)


### Contas

#### `GET` `/contas?senha_banco=Cubos123Bank` - Este endpoint lista todas as contas bancárias existentes.
#### `POST` `/contas` - Este endpoint cria uma conta bancária, gerando um número único de identificação para a conta (número da conta).
#### `PUT` `/contas/:numero_conta/usuario` - Este endpoint atualiza apenas os dados do usuário de uma conta bancária.
#### `GET` `/contas/saldo?numero_conta=123&senha=123` - Este endpoint retorna o saldo de uma conta bancária.
#### `GET` `/contas/extrato?numero_conta=123&senha=123` - Este endpoint lista as transações realizadas em uma conta específica.

### Transações

#### `POST` `/transacoes/depositar` - Este endpoint soma o valor do depósito ao saldo de uma conta válida e registra essa transação.
#### `POST` `/transacoes/sacar` - Este endpoint realiza um saque de um valor de uma determinada conta bancária e registra essa transação.
#### `POST` `/transacoes/transferir` - Este endpoint permite a transferência de recursos (dinheiro) de uma conta bancária para outra e registra essa transação.