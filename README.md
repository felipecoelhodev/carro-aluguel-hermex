## CarHub | Hermex - Plataforma de Aluguel de Veículos 

O CarHub | Hermex é uma aplicação web moderna voltada para a locação e reserva de carros. A plataforma permite que os usuários explorem o catálogo de veículos, filtrem por categorias e consultem detalhes completos para facilitar a escolha do carro ideal. Durante o desenvolvimento, foram aplicados conceitos fundamentais do framework Remix, incluindo: Fundamentos e arquitetura do Remix; Migração de bases e criação de componentes reutilizáveis; Integração de telas e consumo de dados utilizando Loaders; Implementação e manipulação de formulários utilizando Actions.

## Tecnologias Utilizadas

* React 19 


* Remix / React Router v7  


* TypeScript 


* Tailwind CSS v4 


* JSON Server (para simulação de API REST) 


* Docker 



## Funcionalidades

**Busca Customizada**: Formulário de pesquisa que permite selecionar local de retirada, data e horário.


**Navegação por Categorias**: Exploração de veículos separados por tipos.


**Filtros e Ordenação**: Funcionalidade de organização avançada dos resultados da busca por preço (crescente ou decrescente) e ordem alfabética (A-Z).


**Especificações Detalhadas**: Visualização completa de informações do veículo, apresentando capacidade de passageiros, tipo de transmissão, combustível, capacidade do porta-malas e presença de ar condicionado.


**Design Responsivo e Moderno**: Interface construída com utilitários do Tailwind CSS, garantindo padronização visual através de variáveis CSS customizadas e ícones dinâmicos do pacote `react-icons`.



## Como Executar o Projeto

### Pré-requisitos

* Node.js (versão 20) 


* NPM (Gerenciador de pacotes) 



### Instalação e Execução Local

1. Instale todas as dependências do projeto executando o comando `npm install`.
2. Inicie a API mock utilizando o JSON Server na porta 3001 com o comando `npm run server`.


3. Em um novo terminal, inicie o servidor de desenvolvimento utilizando o comando `npm run dev`.



### Execução via Docker

1. O projeto conta com um `Dockerfile` configurado com o padrão *multi-stage build* para otimizar o tamanho da imagem final.


2. Realize o build e a execução do contêiner pelas ferramentas padrão do Docker, o que disparará a construção estática através de `npm run build` e inicializará o serviço de produção com `npm run start`.



## Estrutura de Rotas e Integração de Dados

**Navegação de Interface**: O sistema de rotas gerencia as páginas principais, contemplando a Home (`/`), página de Busca (`/search`), listagem de Categorias (`/categories`) e a exibição de Detalhes do Carro (`/car/:id`).


**Camada de Serviço (API)**: As requisições de dados da aplicação são encapsuladas e apontam para a URL base `http://localhost:3001`, consumindo os recursos expostos nos endpoints `/car` e `/category`.
