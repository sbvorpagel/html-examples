## Offline first

Está técnica faz com que toda a requisição que chegue na aplicação, seja buscada primeiramente no cache e caso não encontre, seja buscada na API

## Casos de uso

É interessante em aplicações (ou parte de uma aplicação) que não tenha atualização constante dos dados e que essas atualizações não impedem o uso do usuário.

Ex.: Blogs, landing pages, entre outros.

## Observações

Por default, o browser irá requisitar uma nova instalação do service worker em 24h, então o seu cache poderá ser atualizado a cada 24 por default.

Essa estratégia, pode ser condicional. Você pode por exemplo, não solicitar o cache para uma parte, deixando ela online first.
