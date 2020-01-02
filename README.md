## Exercício Final - 10/01/2020

Criar uma aplicação de ToDo List onde seja possível:

- Adicionar itens à uma lista
- Marcar itens como concluídos
- Marcar itens como favoritos

A aplicação deve conter duas sessões/páginas, uma para a lista de itens, outra para a lista de favoritos (caso crie páginas separadas, leve em consideração criar um menu de acesso às páginas).

O footer da aplicação deve exibir a contagens de itens (itens, favoritos, concluídos, não-concluídos)

Utilize à arquitetura mostrada na aula para criação das `pages/components/services.`

Além dos requisitos acima, leve em consideração também:

- Utilização de template literals para retorno de views
- Estilização de componentes/páginas pelo javascript
- Utilização de estado global utilizando o window (utilize o estado da aplicação na manipulação do objeto de itens/favoritos)
- Manipulação de objetos de itens/favoritos

**Extra**:
Criar dois temas, um claro e outro escuro, onde o usuário possa escolher entre um e outro.

`Dica`: utilize o estado global para armazenar o tema escolhido, conforme a escolha do usuário, armazene esta informação no `local storage` e toda vez que a aplicação inicializar, verifique se já existe a informação de tema lá, caso já exista, atribua este valor à variável global (estado) responsável pelo controle de temas.
