# Renderizando la web en 2020

Como desarrolladores de software, nos solemos enfrentar con decisiones en nuestros proyectos que afectarán a toda la arquitectura de estos de una u otra manera. Una de las decisiones principales que deben de tomarse en el planteamiento de un proyecto web es dónde implementar la lógica y el renderizado del frontend. Esta decisión puede no ser tan evidente a veces y debemos analizar nuestro escenario para encontrar la estrategia más adecuada para renderizar nuestra web.

En el último año, ha cogido gran fuerza la estrategia JAMstack (https://jamstack.org/). Generalmente esta aproximación contempla una web únicamente desarrollada con JavaScript, APIs y lenguaje de marcado. Estos sitios suelen construirse con generadores de sitios estáticos como pueden ser Jekyll, Hugo, Nuxt, Next, Gatsby, entre otros.

Lo que todos estos sites tienen en común es que no dependen de un backend que está renderizando la web en cada request, liberándose así de costes de infraestructura. Otra característica que representa a estos sites JAMStack es, generalmente, la utilización de Headless CMS (https://headlesscms.org/) para recuperar la fuente de datos estáticos en el momento de build.

Para comprender mejor el tipo de arquitectura que podemos elegir cuando tomamos este tipo de decisión, necesitamos tener un fuerte conocimiento de cada enfoque, identificar cuáles son sus ventajas y desventajas y trabajar con una terminología coherente para identificarlos correctamente.

Las diferencias entre cada uno de estos enfoques de renderizando ayudan a tomar la decisión acertada para tu arquitectura, sobre todo vista desde el punto de vista del performance y del coste de la infraestructura. Descubriremos cómo elegir la mejor estrategia desde un modelo tradicional como SSR hasta un modelo más innovador como CSR.

## Estrategias de renderizado web

Para ello, lo primero que necesitamos entender son las siglas/nomenclaturas que utilizamos para identificar inequívocamente cada estrategia de renderizado:

- **SSR**: Server-Side Rendering: se renderiza el HTML del cliente totalmente en el lado servidor. Esta aproximación suele ser el modelo de webs tradicionales.
- **CSR**: Client-Side Rendering: se renderiza la aplicación completamente en el navegador haciendo uso de Javascript y la gestión del DOM. Comúnmente conocidas como Single Page Applications.
- **Rehydration**: esta estrategia es un híbrido de las dos anteriores en el que se aprovecha el HTML y los datos renderizados desde el lado servidor, hidratándose con una aplicación javascript que se monta encima de esta.
- **Prerendering**: en esta estrategia se renderiza la web en tiempo de construcción creando un artefacto que puede servirse de una manera totalmente estática.

## Glosario de métricas sobre el performance

Existen una serie de métricas de performance que son muy importantes para analizar cada una de las estrategias de renderizado anteriores y que vamos a ver cómo se relacionan con cada uno de ellos.

- **TTFB**: Time to First Byte. El tiempo entre que pinchas un enlace y el primer byte de contenido llega al navegador.
- **FP**: First Paint. Es el tiempo que tarda en pintarse el primer píxel que haga visible la web al usuario.
- **FCP**: First Contentful Paint. Es el tiempo que tarda en ser visible el contenido que hemos solicitado.
- **TTI**: Time To Interactive. Es el tiempo que tarda una página en ser interactiva.
