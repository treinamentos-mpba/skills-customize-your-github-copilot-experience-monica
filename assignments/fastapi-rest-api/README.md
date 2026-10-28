# 📘 Atividade: Building REST APIs with FastAPI

## 🎯 Objetivo

Aprenda a criar uma API REST com FastAPI, definindo rotas HTTP, validando dados com modelos Pydantic e retornando códigos de status apropriados. Ao final, você terá uma API em memória para consultar e gerenciar um catálogo de livros.

## 📝 Tarefas

### 🛠️ Criar Rotas para Consultar Livros

#### Descrição
Complete o código inicial para criar uma aplicação FastAPI que disponibilize um catálogo de livros. Comece pelas rotas de consulta e pratique o uso de métodos HTTP, parâmetros de caminho e respostas JSON.

Para executar a aplicação, instale FastAPI e Uvicorn e inicie o servidor de desenvolvimento:

```bash
python -m pip install fastapi uvicorn
uvicorn starter-code:app --reload
```

#### Requisitos
O programa concluído deve:

- Criar uma aplicação FastAPI chamada `app`.
- Definir um modelo `Book` com `id` inteiro, `title` textual e `author` textual.
- Implementar `GET /books` para retornar todos os livros.
- Implementar `GET /books/{book_id}` para retornar um livro pelo ID ou responder com status `404` quando ele não existir.
- Permitir testar as rotas pela documentação interativa disponível em `/docs`.

### 🛠️ Implementar Operações de Criação, Atualização e Remoção

#### Descrição
Expanda a API para que clientes possam adicionar, atualizar e remover livros. Use os modelos Pydantic para validar os dados recebidos e retorne respostas HTTP adequadas a cada operação.

#### Requisitos
O programa concluído deve:

- Implementar `POST /books` para criar um livro e responder com status `201`.
- Implementar `PUT /books/{book_id}` para atualizar o título e o autor de um livro existente.
- Implementar `DELETE /books/{book_id}` para remover um livro existente e responder com status `204`.
- Responder com status `404` ao tentar atualizar ou remover um livro inexistente.
- Rejeitar dados de entrada que não correspondam aos campos e tipos definidos no modelo.
- Demonstrar as operações e os casos de erro pela documentação interativa em `/docs`.
