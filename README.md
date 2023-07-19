# BLOG PESSOAL

## Dependencias

Este componente foi desenvolvido para a disciplina de Arquitetura de Software Frontend, na especialização em Arquitetura de Software Distribuido, cursada na PUCMG em 2023/01.

Este projeto faz uso de [react](https://react.dev/learn), fazendo uso do framework [Next.js](https://nextjs.org/docs).

## Como executar

O projeto pode ser startado e executado com base nos seguintes comandos:

Passo 1: Install de dependencias:
```shell
npm install
```
Passo 2: Build do projeto:
```shell
npm run build
```
Passo 3: Start do projeto:
```shell
npm run start
```

Após isso o projeto estará rodando na porta 3000, podendo ser acessado em [http://localhost:3000](http://localhost:3000).

Outros comandos podem ser encontrados na docto [Next.js CLI](https://nextjs.org/docs/pages/api-reference/next-cli).

## Organização do projeto

Os pacotes do projeto se distribuem da seguinte forma:
- `public`: contém os arquivos estáticos do projeto, como imagens e fontes.
- `src`: contém os arquivos de código fonte do projeto.
  - `components`: contém os componentes do projeto.
    - `.js`: contém os componentes em javascript.
    - `.css`: contém os estilos dos componentes.
    - `.test`: contém os testes dos componentes.
  - `data`: contém os arquivos de dados do projeto, como os posts do blog.
  - `pages`: contém as páginas do projeto.

## Considerações

Este projeto foi criado com base no template disponibilizado pela Next.js, em [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app).
