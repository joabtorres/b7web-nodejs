# PROJETO PRÁTICO MODULO 06 - CRIANDO UMA API PARA NOTÍCIAS

Este projeto tem como objetivo colocar em prática tudo o que foi ensinado até o meu presente progresso no curso de nodejs + typescript.

## PRE-REQUISITOS

-  criar o banco de dados mysql e import os dados do arquivo

`nodejsb7web_blog_api.sql`

-  Instalar os modulos do projeto

`npm install`

### Roda o projeto em typscript

`npm run start-dev`

### criar build do projeto para javascript

`npm run tsc`

### Roda projeto em produção

`npm run start`

### ROTAS DAS API

#### users

POST /users/create - criar novo usuario

PUT /users/update/:id - editar usuario

DELETE /users/remove/:id - deleta usuario

GET /users/read - ler todos usuarios

GET /users/:id - encontrar usuario pelo id

GET /users/search - pesquisa usuario pelo nome

### news

POST /news/create - criar nova notícia

PUT /news/update/:id - editar notícia

DELETE /news/remove/:id - deleta notícia

GET /news/read - ler todas notícia

GET /news/:id - encontrar notícia pelo id

GET /news/:slug - encontrar notícia pelo slug

GET /news/search - pesquisa notícia pelo nome

### comments

POST /comments/create/:slug - criar comentário

PUT /comments/update/:id - editar editar comentário

DELETE /comments/remove/:id - deleta comentário

## Estrutura do Banco de Dados

-  users
   -  id - int
   -  name - string
   -  email -string
   -  password - string
-  news
   -  id - int
   -  title - string
   -  slug: - string UNIQUE
   -  text - text
   -  author_id - int chave estrangeira do usuário
-  comments
   -  id - int
   -  news_id - int chave estrangeira de noticias
   -  name - string
   -  text - string

## bibliotecas utilizadas

-  typescript;
-  cors;
-  express;
-  sequelize;
-  mysql2
-  validator;
-  dotenv;
-  path;

`npm install typescript cors express sequelize validator dotenv path`

## Types

-  @types/node;
-  @types/express;
-  @types/validator;
-  @types/cors;

`npm install --save-dev @types/node @types/express @types/validator @types/cors`
