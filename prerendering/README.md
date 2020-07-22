# Prerendering

El prerendering o renderizado estático ocurre en la etapa de build. Esta estrategia se encarga de producir un archivo HTML separado para cada URL en el momento de construcción del site. Estos HTML pregenerados, se pueden alojar en CDNs para aprovechar el almacenamiento en caché y servir a gran velocidad una versión completa del website, sin depender de una infraestructura pesada.

Esta estrategia ofrece un FP y FPC muy rápido, lo que ha provocado una gran acogida, estos tiempos son beneficiosos para la experiencia de usuario y el SEO. A semejanza de soluciones como SSR, también logra alcanzar un tiempo de carga muy rápido (TTFB), ya que el HTML de una página no tiene que generarse al vuelo, si no que ya se encuentra preconstruido. En este escenario el TTI es variable y depende de la cantidad de JS del lado del cliente

Existen multitud de soluciones para el renderizado estático que ha aparecido en los últimos años. Uno de los más conocidos es GatsbyJS, el cual permite sentir a los desarrolladores que la aplicación se procesa dinámicamente en lugar de generarse como un paso de compilación. Sin embargo, existen multitud de soluciones como NextJS, Hugo o Jekyll que también ofrecen implementar este tipo de sites.

Una de las desventajas del renderizado estático es que se deben generar archivos HTML individuales para cada URL. Esto puede ser a veces un desafío o incluso inviable cuando es difícil predecir cuáles serán todo el mapa de URLs con anticipación, o para sitios con una gran cantidad de páginas únicas y con contenido cambiante.

Sin embargo los puntos principales por los que esta estrategia se ha puesto de moda:

Alto Rendimiento: las páginas no se construyen al vuelo, sino en la etapa de build, por lo que se minimiza el TTFB y los ficheros reconstruidos se sirven a través de una red global CDN
Alta seguridad: con esta aproximación el lado servidor se puede abstraer reduciendo las áreas de ataque
Barato y escalable: los despliegues son muy sencillos, ya que solo hay que servir un build estáticos de ficheros html, css y Javascript, además más barato porque solo necesitamos alojarlo en un CDN, que requiere menos coste que una aproximación que requiere de cómputo para el renderizado.

## Arrancar proyecto

Desarrollo

```
npm install
npm run develop
```

Prod

````
npm run build
npm serve
```
````
