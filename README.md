# Projeto de Chat

Este projeto inclui um sistema de chat interativo com interface de usuário construída utilizando React e estilos fornecidos pelo Tailwind CSS.

## Configuração

Este projeto usa Tailwind CSS para estilos, proporcionando uma experiência de usuário consistente e responsiva.

### Tailwind CSS

`tailwind.config.js` está configurado para incluir caminhos para todos os seus arquivos de componente, garantindo que os estilos sejam aplicados corretamente.

## Iniciando

Antes de iniciar o projeto, você precisa instalar as dependências necessárias e configurar o ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Caso contrário, você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

Baixe e execute o backend da aplicação [clicando aqui](https://github.com/luizHenriqueNog/windprof-backend).

### Instalação

Após clonar o repositório, navegue até a pasta do projeto e execute o seguinte comando para instalar todas as dependências:

```bash
npm install
```

## Configuração do Backend

Para conectar a aplicação frontend ao seu servidor backend, é necessário alterar a URL base utilizada para as chamadas de API.

Siga os passos abaixo para realizar essa alteração:

1. Abra o arquivo `src/app/utils/openai.ts` com o seu editor de código preferido.

2. Localize a seguinte linha de código:

   ```typescript
   const response = await axios.post('http://localhost:5051/translate', {
       messages
   });

### Executando

Após instalar as dependencias execute o comando:

```bash
npm run dev
```