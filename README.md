# ENETRIX Chatbot

Projeto desenvolvido para o desafio técnico da ENETRIX.

A aplicação apresenta uma interface web de atendimento com chatbot,
permitindo que o usuário envie perguntas, visualize respostas, consulte
o histórico da conversa e utilize sugestões para iniciar o atendimento.

O projeto foi desenvolvido com foco em uma interface simples, responsiva
e organizada.

## Funcionalidades implementadas

-   Página inicial com apresentação da ENETRIX.
-   Acesso à área de atendimento.
-   Envio de mensagens pelo chatbot.
-   Respostas simuladas do chatbot.
-   Estado vazio antes da primeira mensagem.
-   Sugestões de perguntas para iniciar o atendimento.
-   Histórico da conversa.
-   Persistência das mensagens no `localStorage`.
-   Botão para limpar o histórico.
-   Tratamento de erro no envio de mensagens.
-   Opção de tentar novamente após uma falha.
-   Layout responsivo.
-   Menu de navegação adaptado para telas menores.

## Tecnologias utilizadas

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   React Router
-   Lucide React
-   HTML5
-   CSS3

## Como instalar e executar

### Pré-requisitos

É necessário ter instalado:

-   Node.js
-   npm

### Instalação

Clone o repositório e entre na pasta do projeto:

``` bash
git clone <URL_DO_REPOSITORIO>
cd enetrix-chatbot
```

Instale as dependências:

``` bash
npm install
```

### Executar em desenvolvimento

``` bash
npm run dev
```

Depois, acesse no navegador o endereço informado pelo Vite, normalmente:

``` text
http://localhost:5173
```

### Gerar a versão de produção

``` bash
npm run build
```

Para executar uma prévia da versão de produção:

``` bash
npm run preview
```

## Simulação da integração com o chatbot

Nesta versão, a integração com um serviço real de inteligência
artificial ainda não foi realizada.

A comunicação foi separada no arquivo:

``` text
src/services/chatService.ts
```

Ao enviar uma mensagem, o serviço simula um tempo de processamento de
aproximadamente 1 segundo e retorna uma resposta.

Por exemplo, uma mensagem enviada pelo usuário recebe uma resposta no
formato:

``` text
Recebi sua mensagem: "mensagem enviada pelo usuário"
```

Também foi criado um cenário de erro para testar o comportamento da
interface. Ao enviar a mensagem `teste erro`, o serviço simula uma falha
de comunicação.

Essa estrutura permite que, futuramente, a função simulada seja
substituída por uma chamada para uma API ou outro serviço real de
chatbot sem precisar alterar toda a interface.

## Persistência do histórico

As mensagens da conversa são armazenadas no `localStorage` do navegador.

A chave utilizada é:

``` text
enetrix-chat-messages
```

Assim, o histórico continua disponível depois que a página é atualizada.

Também foi implementado o botão **Limpar histórico**, que remove as
mensagens armazenadas e retorna a interface para o estado inicial do
atendimento.

## Principais decisões técnicas

### Componentização

A interface foi dividida em componentes menores para facilitar a
organização e manutenção do código.

Alguns dos principais componentes são:

-   `Navbar`
-   `Footer`
-   `ChatInput`
-   `ChatMessage`
-   `ChatHistory`
-   `ChatEmptyState`
-   `ChatSuggestions`
-   `ChatMobileMenu`

### React e TypeScript

React foi utilizado para construção da interface e gerenciamento dos
estados da aplicação.

TypeScript foi utilizado para tipar componentes, propriedades, mensagens
e conversas.

### Tailwind CSS

Tailwind CSS foi utilizado para a estilização da aplicação, permitindo
criar o layout diretamente nos componentes e manter os estilos de forma
mais simples.

### Separação do serviço de chatbot

A lógica de comunicação do chatbot foi separada da interface no arquivo
`src/services/chatService.ts`.

A escolha facilita uma futura integração com uma API real.

### LocalStorage

O `localStorage` foi utilizado para persistir o histórico das mensagens
sem a necessidade de um backend ou banco de dados nesta versão.

## Estrutura principal

``` text
src/
├── components/
│   ├── chat/
│   │   ├── ChatEmptyState.tsx
│   │   ├── ChatHistory.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatMobileMenu.tsx
│   │   └── ChatSuggestions.tsx
│   │
│   └── layout/
│       ├── Footer.tsx
│       └── Navbar.tsx
│
├── data/
├── pages/
│   ├── Chat/
│   │   └── Chat.tsx
│   └── Home/
│       └── Home.tsx
│
├── services/
│   └── chatService.ts
│
├── types/
│   └── chat.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Limitações

A versão entregue possui algumas limitações:

-   O chatbot não utiliza uma inteligência artificial real.
-   Não existe integração com uma API externa.
-   As respostas são simuladas.
-   O histórico é armazenado somente no navegador.
-   Não existe autenticação de usuários.
-   Não existe banco de dados.
-   O histórico atual representa uma conversa local no navegador.

## Melhorias futuras

Com mais tempo, algumas melhorias poderiam ser implementadas:

-   Integração com uma API de inteligência artificial.
-   Criação de um backend para o chatbot.
-   Persistência das conversas em banco de dados.
-   Autenticação e gerenciamento de usuários.
-   Suporte a múltiplas conversas no histórico.
-   Possibilidade de renomear e excluir conversas individualmente.
-   Respostas em streaming.
-   Melhor tratamento de estados de carregamento e erros.
-   Testes automatizados.
-   Deploy da aplicação em um ambiente de produção.

## Ferramentas de inteligência artificial utilizadas

Durante o desenvolvimento foram utilizadas ferramentas de inteligência
artificial como apoio à programação e ao processo de desenvolvimento:

-   **ChatGPT** --- utilizado para apoio na organização do projeto,
    desenvolvimento de componentes, resolução de problemas, revisão de
    código e refinamentos da interface.
-   **Claude** --- utilizado como apoio na análise e desenvolvimento de
    partes do projeto.

As ferramentas foram utilizadas como auxílio ao desenvolvimento. As
decisões de implementação, testes e ajustes finais foram realizados
durante o desenvolvimento do projeto.

## Status

Projeto desenvolvido para fins acadêmicos e para avaliação no desafio
técnico da ENETRIX.
