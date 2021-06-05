# Challange FIAP - WebServices

Visão geral do projeto

A solução para o challange, está separada em 2 partes, a primeira é a API feita em Node.JS e a segunda é o front-end do site que em primeira instância eu fiz apenas em HTML e CSS puro e como sobrou tempo para a solução do desafio me aventurei em fazer o front-end em React.

Tecnologias principais usadas: HTML, CSS, JavaScript, Node.JS, React.

<hr>

## Instruções para rodar o app em sua máquina :dash:

##### No terminal, clone o projeto:

```
git clone https://github.com/Gabslima121/challange-webservice.git
```

##### Instalar os modulos do Node.JS na pasta *api*:

```
npm i
```

*Lembre-se de ter o Node instalado na sua maquina com a versão mais recente*

No arquivo .env.example dentro da pasta *API* coloque suas variáveis de ambiente e renomei o arquivo para apenas *.env*;

Nas pastas *../app/js/index.js* coloque o endereço do localhost que voce deseja ultilizar;

<hr>

### Para inicializar o app em sua maquina :dash:

##### Para rodar a API acesse a pasta da API

```
cd api
```

##### Eu fiz uma separação no projeto onde eu rodo 2 comandos o primeiro é o:

```
npm run dev:seed
```

Com esse comando você vai acessar o banco de dados e ele vai automaticamente criar as tabelas e inputar os valores padrões do desafio em suas respectivas tabelas. Após ter rodado esse comando você deve finalizar o processo usando CRTL+C (para maquinas com Windows) ou Command+C (para maquinas com MacOS).

##### Agora basta rodar o comando:

```
npm run dev
```

Esse comando vai apenas fazer a conexao com a API e deixar a mesma rodando, sem fazer alterações na tabela.

Com isso você ja consegue acessar as rotas via app.
