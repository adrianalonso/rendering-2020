# CSR: Client Side Rendering

Client Side Rendering es una estrategia en la que se genera el HTML de las páginas completamente en el lado cliente apoyándose en JavaScript. Toda la responsabilidad sobre la obtención de datos, la creación de templates o el enrutamiento se llevan al lado cliente en lugar del servidor. Estas aplicaciones suelen ser comúnmente conocidas como Single Page Applications (SPA) y su origen nace a raíz del auge de frameworks Javascript como React, Angular o Vue.

CSR puede tener algunas desventajas en la carga para dispositivos móviles, ya que estas aplicaciones requieren de la construcción en el lado cliente por lo que hace un uso intensivo del navegador. La cantidad de Javascript tiende a crecer a medida que crece la aplicación, por lo que cuanto más grande es nuestra aplicación más lenta se puede volver. Sin embargo, para solventar estos problemas podemos considerar estrategias como code-splitting o lazy load: partiendo nuestro build de tal manera que "servimos solo lo que necesita, cuando se necesita".

Este tipo de estrategias son ideales para aplicaciones privadas como paneles de administración, aplicaciones corporativas, intranets... donde la necesidad es que la interacción sea buena y fluida. Para mejorar el rendimiento se apoyan en soluciones de caché en el lado cliente como Local Storage y Service Workers, para ofrecer una buena experiencia de usuario.

Estas soluciones suelen tener un rápido TTFB, ya que sirven un HTML delgado y un Javascript generalmente cacheado por el navegador que construye completamente nuestra aplicación. Esta construcción a veces genera un TTI alto, ya que se requiere de un tiempo de carga inicial que puede demorarse unos segundos, hasta que nuestra aplicación esté lista y con los datos necesarios para arrancar.

## Arrancar proyecto

```
npm install
npm start
```
