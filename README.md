## Projeto Full Stack de Envio de Email com Node e React

<p align="center">
   <a href="#Rodando-Front-End"></a>
</p>

## Features

* [x] envio de email
* [ ] servico de fila
* [x] cadastro de dados
* [ ] mensagem ao usuario
* [x] react query
* [x] clean arquiteture
* [x] design pattern


## sobre o projeto

Este é um projeto full stack que permite o envio de emails utilizando as tecnologias Node.js e React. Ele consiste em duas partes principais: o backend construído com Node.js e o frontend desenvolvido com React. trabalhando servico de fila com o fastfy micro-framework para integrar o back and do node com front end cadastrando dados do usuario. entregando mensagens para usuarios(com redis)



## Rodando Front end

Após configurar o backend e o frontend, você pode acessar o aplicativo em seu navegador. O frontend permite que você preencha um formulário de envio de email, incluindo o destinatário, assunto e conteúdo do email. Ao enviar o formulário, o backend irá processar a requisição e enviar o email utilizando as informações fornecidas.

<img width="1276" alt="Untitled" src="https://github.com/Guilhermefonseca2021/email-service/assets/92196697/5e49a908-23a4-432e-b92b-c92dbb1a793e">

## Princípios da Arquitetura Limpa

1. **Independência de Frameworks**: Arquitetura independente de qualquer framework externo, bibliotecas ou frameworks , permite que a aplicação seja facilmente adaptada a diferentes tecnologias.

2. **Testabilidade**: A arquitetura deve facilitar a realização de testes automatizados, permitindo a criação de testes unitários e de integração de forma eficiente.

3. **Independência de UI**: A lógica de negócio não deve depender da interface do usuário. Isso permite que a mesma lógica de negócio seja reutilizada em diferentes interfaces, como API REST, CLI ou interface gráfica.

4. **Independência de Banco de Dados**: Aquitetura independente do banco de dados utilizado. Permite que seja possível trocar o banco de dados sem afetar a lógica de negócio. Incrivel para caramba, desculpa mas isso me conquistou, e é muito limpo trabalhar dessa maneira hahahaha.

## Componentes da Arquitetura Limpa

A Arquitetura Limpa é composta por camadas e componentes que interagem entre si de forma organizada. Os principais componentes são:

1. **Entities**: São as entidades de negócio, que representam os conceitos e regras de domínio da aplicação. Elas são independentes de qualquer tecnologia ou framework.

2. **Use Cases (Interactors)**: São os casos de uso da aplicação, que implementam as regras de negócio. Eles orquestram a interação entre as entidades e são independentes de qualquer tecnologia externa.

3. **Interfaces**: São as interfaces de entrada e saída da aplicação. Elas podem ser representadas por APIs REST, CLI, interfaces gráficas, entre outras. As interfaces são responsáveis por adaptar os dados recebidos e enviados pelas entidades e casos de uso.

4. **Frameworks e Drivers**: São os componentes externos utilizados pela aplicação, como frameworks web, bibliotecas de acesso a banco de dados, entre outros. Eles são responsáveis por adaptar os dados da aplicação para as tecnologias utilizadas.

## Organização da Estrutura de Diretórios

Para aplicar a Arquitetura Limpa em um projeto de backend, é comum utilizar uma estrutura de diretórios que reflete a separação de responsabilidades. A seguir, apresentamos uma sugestão de estrutura de diretórios:


src/

├── entities/

├── usecases/

├── interfaces/
    ├─controllers/
    ├── presenters/
    └── repositories/


├── frameworks/
    ├── database/
    ├── http/
    └── ...

└── main/
    └── ...


<a href="https://email-service-one.vercel.app/"> clique aqui para testar aplicação </a>


<img width="1276" alt="template" src="https://github.com/Guilhermefonseca2021/email-service/assets/92196697/692e8899-358b-431b-b245-b2b186789f72">


## React Query

-react query trabalha com cashs de dados para nao deixar o user esperando
-bliblioteca React query adiciona um superset de controllers, se isLoading, reFetch, isError fazendo cash dos dados.

## Contribuição

Fique à vontade para contribuir com melhorias para este projeto. Você pode abrir uma issue para relatar problemas ou sugerir novas funcionalidades. Além disso, pull requests são bem-vindos!
