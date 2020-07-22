# SSR Tradicional

Server Side Rendering es una estrategia en la que se genera el HTML completo para una página en el servidor en respuesta a una url y su navegación. Esto evita viajes de ida y vuelta adicionales para la obtención de datos y la creación de plantillas en el cliente, ya que se maneja antes de que el navegador obtenga una respuesta. Suele ser el modelo de webs tradicionales y el renderizado de CMSs clásicos como Wordpress o Drupal

Esta estrategia produce un FP (First Paint) y un FCP (First Contentful Paint) muy rápido. La ejecución de la lógica de página y la representación en el servidor hace posible evitar el envío de mucho JavaScript al cliente, lo que ayuda a lograr un tiempo de interacción (TTI) rápido, ya que no requieren de tanta interacción, aunque no siempre es así.

Con la respuesta del servidor en realidad solo está enviando texto y enlaces al navegador del usuario, sin embargo la construcción de este estado global lo convierte a veces en un proceso pesado de renderización que perjudica radicalmente al Time to First Byte.

Estos problemas de rendimiento se suelen solventar con algún tipo de software de aceleramiento HTTP como puede ser Varnish o Nginx. También algunos frameworks dan soluciones para implementar una implementación caché HTTP como puede ser Symfony con su componente Http Cache Component. (https://symfony.com/doc/current/http_cache.html)

## Arrancar proyecto

```
npm install
```

Crear esquema de base datos demo:

```
npm run typeorm schema:sync
npm run fixtures
```

Modo desarrollo:

```
npm run start:dev
```
