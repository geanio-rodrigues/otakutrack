# Otaku Track

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Uma plataforma web para entusiastas de animes descobrirem e organizarem os animes que assistem. O projeto permite que usuários explorem novidades, animes populares e diversas categorias, além de gerenciar suas informações de perfil.

![Captura de Tela do Otaku Track](./src/assets/imagem.png)

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação e Execução](#instalação-e-execução)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## Sobre o Projeto

O **Otaku Track** foi desenvolvido como uma solução centralizada para fãs de animes. Com a vasta quantidade de títulos disponíveis, esta plataforma visa facilitar a descoberta de novos animes, acompanhar os lançamentos e permitir que os usuários mantenham um controle sobre seu progresso e perfil, tudo em um ambiente intuitivo e moderno.

---

## ✨ Funcionalidades

-   🔐 **Autenticação de Usuários:** Sistema completo com criação de conta, login e logout utilizando JWT para segurança.
-   👤 **Gerenciamento de Perfil:** Os usuários podem visualizar e editar suas informações de perfil.
-   🧭 **Navegação por Categorias:** Explore animes por diversas categorias, como "Populares", "Novidades" e gêneros específicos (Ação, Comédia, etc.).
-   🔍 **Visualização de Detalhes:** Interface limpa para exibir informações sobre cada anime.
-   🎨 **Design Responsivo:** A aplicação se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

---

## 💻 Tecnologias Utilizadas

A aplicação é dividida em duas partes principais: o frontend e o backend.

### **Frontend**

-   **React (com Vite):** Biblioteca principal para a construção da interface de usuário, com um ambiente de desenvolvimento rápido fornecido pelo Vite.
-   **React Router:** Para gerenciamento de rotas e navegação entre as páginas.
-   **Axios:** Cliente HTTP para realizar as chamadas à API do backend.
-   **Zustand:** Para gerenciamento de estado global da aplicação de forma simples e eficiente.
-   **Tailwind CSS:** Framework de CSS para estilização rápida e responsiva.
-   **Jikan API:** API externa utilizada para consumir os dados e imagens dos animes.

### **Backend**

-   **Node.js:** Ambiente de execução para o servidor.
-   **Express.js:** Framework para a construção da API REST.
-   **Prisma:** ORM para interação com o banco de dados de forma segura e moderna.
-   **PostgreSQL:** Banco de dados relacional para armazenamento dos dados dos usuários.
-   **JWT (JSON Web Token):** Para a implementação do sistema de autenticação e autorização.

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação em seu ambiente local.

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
-   [Git](https://git-scm.com)
-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
-   Uma instância do [PostgreSQL](https://www.postgresql.org/) rodando localmente ou em um serviço de nuvem.

### Instalação e Execução

1.  **Clone o repositório**
    ```sh
    git clone https://github.com/geanio-rodrigues/otakutrack
    ```

2.  **Configure o Backend**
    ```sh
    # Navegue até a pasta do backend
    cd backend

    # Instale as dependências
    npm install

    # Crie um arquivo .env na raiz da pasta 'backend' e adicione as seguintes variáveis:
    # Substitua pelos dados do seu banco PostgreSQL e crie um segredo para o JWT
    ```
    **Arquivo `.env` (Exemplo):**
    ```env
    DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
    JWT_SECRET="SEU_SEGREDO_SUPER_SECRETO_AQUI"
    ```
    ```sh
    # Execute as migrações do Prisma para criar as tabelas no banco de dados
    npx prisma migrate dev

    # Inicie o servidor do backend
    npm run dev
    ```
    O servidor backend estará rodando em `http://localhost:4000`.

3.  **Configure o Frontend**
    ```sh
    # Em outro terminal, navegue de volta para a raiz do projeto e entre na pasta do frontend
    # (Se seu frontend está na raiz, apenas navegue para a raiz)
    cd ..

    # Instale as dependências
    npm install

    # Inicie a aplicação React
    npm run dev
    ```
    A aplicação frontend estará acessível em `http://localhost:5173`.

---

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito bem-vinda**.

Se você tiver uma sugestão para melhorar este projeto, por favor, crie um fork do repositório e crie uma pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".

1.  Crie um **Fork** do projeto
2.  Crie sua **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  Faça o **Commit** de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Faça o **Push** para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra uma **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Paiva91">
        <img src="https://github.com/Paiva91.png?size=100" width="100px;" alt="Dárcio Henrique"/><br />
        <sub><b>Dárcio Henrique</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/geanio-rodrigues">
        <img src="https://github.com/geanio-rodrigues.png?size=100" width="100px;" alt="Geanio Rodrigues"/><br />
        <sub><b>Geanio Rodrigues</b></sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/kiyohiroleo">
        <img src="https://github.com/kiyohiroleo.png?size=100" width="100px;" alt="Leandro Quintela"/><br />
        <sub><b>Leandro Quintela</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/vtgabrielcastro">
        <img src="https://github.com/vtgabrielcastro.png?size=100" width="100px;" alt="Victor Gabriel"/><br />
        <sub><b>Victor Gabriel</b></sub>
      </a>
    </td>
  </tr>
</table>
