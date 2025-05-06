# QuickNote

QuickNote é um aplicativo simples de anotações desenvolvido com React, que permite aos usuários criar, visualizar e excluir notas rapidamente. O objetivo principal é fornecer uma interface intuitiva para gerenciamento de notas.

## Tecnologias Utilizadas

- **React.js** - Biblioteca para construção da interface
- **React Router** - Gerenciamento de rotas
- **React Icons** - Ícones para os botões de edição e exclusão
- **CSS Modules** - Estilização modularizada
- **JSON Server** - Simulação de um backend para armazenamento de notas

## Funcionalidades

- Criar novas notas com nome, descrição e conteúdo.
- Listar todas as notas salvas.
- Excluir notas da lista.
- **(Em desenvolvimento)** Função de edição de notas.

## Como Executar o Projeto

### 1. Clonar o repositório

```sh
git clone https://github.com/TiagoSPimentel/QuickNote.git
cd QuickNote
```

### 2. Instalar dependências

```sh
npm install
```

### 3. Iniciar o JSON Server

O projeto usa o JSON Server para simula de API. Para iniciar:

```sh
npx json-server --watch db.json --port 4000
```

### 4. Iniciar o projeto React

Em outro terminal:

```sh
npm start
```

Isso abrirá o aplicativo no navegador em `http://localhost:3000/`.

---

