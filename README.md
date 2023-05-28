# REST API For Tests
Este é um exemplo de uma API local usando o Express.js. A API permite manipular uma coleção de usuários, fornecendo operações como listar todos os usuários, obter um usuário por ID, adicionar um novo usuário, atualizar um usuário existente, e excluir um usuário.

## Tecnologias
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Configuração

Certifique-se de ter o Node.js instalado em sua máquina.

1. Clone o repositório ou crie um novo diretório para o projeto.
2. Navegue até o diretório raiz do projeto.

## Instalação

Execute o seguinte comando para instalar as dependências necessárias:

```
npm install
```

## Executando a API

Execute o seguinte comando para iniciar a API em um servidor local:

```
npm start
```

O servidor será iniciado em `localhost:3000`.

## Endpoints

### Listar todos os usuários

Retorna uma lista de todos os usuários.

- **URL:** `/users/all`
- **Método:** `GET`
- **Resposta de sucesso:** Status 200 (OK)
- **Exemplo de resposta:**

```json
[
  {
    "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
    "name": "John Doe",
    "date_created": "2023-05-25T12:34:56.789Z",
    "image_link": "https://source.unsplash.com/random/200x200/?person"
  },
  {
    "id": "42cf52da-7a5a-487b-a0de-89474f158ed0",
    "name": "Jane Smith",
    "date_created": "2023-05-25T12:34:56.789Z",
    "image_link": "https://source.unsplash.com/random/200x200/?face"
  },
  ...
]
```

### Obter um usuário por ID

Retorna um único usuário com base no ID fornecido.

- **URL:** `/users/:id`
- **Método:** `GET`
- **Parâmetro de caminho:** `id` (string) - O ID do usuário
- **Resposta de sucesso:** Status 200 (OK)
- **Resposta de usuário não encontrado:** Status 404 (Not Found)
- **Exemplo de resposta de usuário encontrado:**

```json
{
  "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
  "name": "John Doe",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://source.unsplash.com/random/200x200/?person"
}
```

### Adicionar um novo usuário

Adiciona um novo usuário à coleção.

- **URL:** `/users`
- **Método:** `POST`
- **Corpo da requisição:** Objeto JSON contendo os dados do usuário (nome)
- **Resposta de sucesso:** Status 200 (OK)
- **Exemplo de corpo da requisição:**

```json
{
  "name": "Emily Brown"
}
```

- **Exemplo de resposta de sucesso:**

```json
{
  "id": "12345678-abcd-efgh-ijkl-1234567890ab",
  "name": "Emily Brown

",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
}
```

### Atualizar um usuário existente

Atualiza os detalhes de um usuário existente com base no ID fornecido.

- **URL:** `/users/:id`
- **Método:** `PATCH`
- **Parâmetro de caminho:** `id` (string) - O ID do usuário
- **Corpo da requisição:** Objeto JSON contendo os dados do usuário a serem atualizados (nome)
- **Resposta de sucesso:** Status 200 (OK)
- **Resposta de usuário não encontrado:** Status 404 (Not Found)
- **Exemplo de corpo da requisição:**

```json
{
  "name": "Novo nome do usuário"
}
```

- **Exemplo de resposta de sucesso:**

```json
{
  "id": "cd1c78e4-5a3d-4d57-b832-784fb5ce6730",
  "name": "Novo nome do usuário",
  "date_created": "2023-05-25T12:34:56.789Z",
  "image_link": "https://source.unsplash.com/random/200x200/?person"
}
```

### Excluir um usuário

Exclui um usuário da coleção com base no ID fornecido.

- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Parâmetro de caminho:** `id` (string) - O ID do usuário
- **Resposta de sucesso:** Status 200 (OK)
- **Resposta de usuário não encontrado:** Status 404 (Not Found)
- **Exemplo de resposta de sucesso:**

```json
{
  "message": "User deleted successfully"
}
```

Este projeto está licenciado sob a Licença  GPL-3.0 License - consulte o arquivo [LICENÇA](LICENSE) para obter detalhes.
