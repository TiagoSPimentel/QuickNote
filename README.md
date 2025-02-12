# QuickNote

QuickNote é um aplicativo simples de anotações desenvolvido com React, que permite aos usuários criar, visualizar e excluir notas rapidamente. O objetivo principal é fornecer uma interface intuitiva para gerenciamento de notas.

## Estrutura de Pastas

O projeto segue a seguinte organização de diretórios:

```
QuickNote/
│-- src/
│   │-- components/
│   │   │-- form/       # Componentes de formulário reutilizáveis
│   │   │-- layout/     # Componentes gerais como botões e mensagens
│   │   │-- notes/      # Componentes específicos para manipulação de notas
│   │-- pages/         # Páginas principais do aplicativo
│   │-- assets/image    # imagens utilizadas
│-- public/           # Arquivos estáticos
│-- package.json      # Dependências e scripts do projeto
│-- README.md         # Documentação do projeto
```

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
git clone https://github.com/seu-usuario/QuickNote.git
cd QuickNote
```

### 2. Instalar dependências

```sh
npm install
```

### 3. Iniciar o JSON Server

O projeto usa o JSON Server como API fake. Para iniciar:

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

