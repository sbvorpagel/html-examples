# Service workers

Service workers faz parte dos workers presentes na específicação do html5. Os workers trabalham fora da thread principal da aplicação, evitando assim competir com o `event.loop()` etc.

O service workers, é capaz de registrar `EventListener` em uma thread secundária, podendo servir assim, de proxy de request entre outras coisas.

As duas grandes vantagens do service worker, que ampliou muito a capacidade da web, é o fato do worker ser único e vinculado ao sistema operacional, dessa forma, ele roda em background. O outro fator importante do service worker, é a forma que ele é gerenciável. Você consegue controlar a instalação, update, atualização etc.

## Algumas coisas que podemos fazer atualmente com service worker

Existem diversas, mas alguma das mais comuns são:

- Página que funcione offline
- Sincronização de dados, mesmo com o site fechado
- Camada de analytics sem atrapalhar o usuário
- Push notification, mesmo com o site fechado

## Coisas que ainda vamos poder fazer

- Geofencing
- Agendamento
