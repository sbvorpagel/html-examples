## Lifecycle

Exemplo de cada etapa do ciclo de vida de um service worker.

## Instalação

Este é o primeiro evento que será invocado, não é recomendado fazer coisas pesadas nessa etapa para não afetar a performance da página. Este evento só é invocado uma vez para cada service worker instanciado, e só será invocado novamente em uma atualização do service worker, seja nova versão ou atualização forçada pelo browser.

É possível obter a informação de quando o processo terminou com a `promise` chamada `event.waitUntil()`.

Exemplo

```javascript
self.addEventListener("install", event =>
  event.waitUntil(console.log("install"))
);
```

## Ativado

Este evento você pode fazer ações prévias a ativação do service worker, por exemplo, migrações de esquema, dados etc.

Assim que o evento de install termina, o worker fica em estado de `waiting` e quando passado pelo evento de install, ele fica ativo para uso. Esse evento só é chamado quando não tem nenhum worker ativo, você também pode dar skip no estado de `wating`.

Este evento você pode fazer ações prévias a ativação do service worker, por exemplo, migrações de esquema, dados etc.

```javascript
self.addEventListener("activate", event =>
  event.waitUntil(console.log("ativado"))
);
```
