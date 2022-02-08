minimicroserviceproduct
Requisitos Node.js v16, Atenção: Node superior bug em webpack.

OBS: Neste mini microservice app não ha dependências entre os serviços, a ideia é que cada serviço seja completamente independente podendo ser implantados em máquinas diferentes. Portanto é necessário instalar as dependências em cada diretório.

A cominicação entre as maquinas sera feita por meio de requisições e rspostas restfull e event-bus

Efetue o clone do repositório no diretório desejado Navegue com o terminal em cada uma das pastas e execute npm install: client products event-bus moderation post query Em cada um dos terminais abertos, digite npm start para iniciar.

Inicie um terminal em cada um dos seguintes diretórios. Em cada um dos terminais abertos, digite npm start para iniciar. Se tudo correu bem, a aplicação do estará disponível em localhost:4001, 4002, 4003 e 3000.

Baixe a imagem do projeto docker hub: docker push 131512/microserv_prodcts_mini:tagname
