# PROJETO PRÁTICO MODULO 06 - CRIANDO UMA API PARA NOTÍCIAS COM COMENTÁRIOS

Este projeto tem como objetivo colocar em prática tudo o que foi aprendido até o meu presente progresso no curso de nodejs + typescript da B7WEb e acessos a documentações.

## PRE-REQUISITOS

-  Criar o banco de dados mysql e import os dados do arquivo

`nodejsb7web_blog_api.sql`

-  Instalação de bibliotecas globais

`npm install -g typescript nodemon ts-node`

-  Instalação dos modulos do projeto

`npm install`

### Comando para funcionar o código em typescript

`npm run start-dev`

### Comando para converter o codigo typescript para javascript

`npm run tsc`

### Comando para funcionar o cógido em javascript

`npm run start`

### ROTAS DA API

#### ROTAS DO USUÁRIO (USERS)

POST /users/create - criar novo usuario

PUT /users/update/:id - editar usuario

DELETE /users/remove/:id - deleta usuario

GET /users/read - ler todos usuarios

GET /users/:id - encontrar usuario pelo id

GET /users/search - pesquisa usuario pelo nome

### ROTAS DE NOTICIAS (NEWS)

POST /news/create - criar nova notícia

PUT /news/update/:id - editar notícia

DELETE /news/remove/:id - deleta notícia

GET /news/read - ler todas notícia

GET /news/id/:id - encontrar notícia pelo id

GET /news/slug/:slug - encontrar notícia pelo slug

GET /news/search - pesquisa notícia pelo nome

### ROTAS DE COMENTÁRIOS (COMMENTS)

POST /comments/create/:slug - criar comentário

PUT /comments/update/:id - editar editar comentário

DELETE /comments/remove/:id - deleta comentário

## Estrutura do Banco de Dados

-  users
   -  id - int primary key auto_increment unsigned
   -  name - varchar (255)
   -  email -varchar (255)
   -  password - varchar (255)
-  news
   -  id - int primary key auto_increment unsigned
   -  title - varchar (255)
   -  slug: - varchar (255) UNIQUE
   -  text - text
   -  author_id - int unsigned foring key users (id)
-  comments
   -  id - int primary key auto_increment unsigned
   -  news_id - int unsigned foring key news(id)
   -  name - varchar (255)
   -  text - text

### bibliotecas globais

-  typescript;
-  nodemon;
-  ts-node

`npm install -g typescript nodemon ts-node`

## bibliotecas utilizadas

-  typescript;
-  cors;
-  express;
-  sequelize;
-  mysql2
-  validator;
-  dotenv;
-  path;
-  slugify;

`npm install typescript cors express sequelize validator dotenv path mysql2 slugify`

## Types

-  @types/node;
-  @types/express;
-  @types/validator;
-  @types/cors;
-  @types/sequelize

`npm install --save-dev @types/node @types/express @types/validator @types/cors @types/sequelize`
