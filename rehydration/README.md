# Rehidratación: Entre el CSR y el SSR

La rehidratación es una técnica de renderizado híbrido, la cual intenta posicionarse en el medio de SSR y CSR, aprovechando lo mejor de cada mundo.

Las peticiones son manejadas por una capa servidor que genera el HTML del servidor como en el modelo SSR, obteniendo las ventajas de una primera renderización rápida y completa de la web, satisfaciendo requisitos SEO. Posteriormente en el lado cliente, la capa Javascript se encarga de recuperar el renderizado y los datos siendo a partir de ese momento el responsable del renderizado con una técnica que se conoce como rehidratación.

Algunos frameworks y herramientas modernas hacen posible esta estrategia que permite renderizar la misma aplicación tanto en el lado cliente como en el lado servidor. Los desarrolladores de React pueden usar renderToString() o soluciones creadas encima, como Next.js para la representación del servidor. Los desarrolladores de Vue también cuentan con su homólogo Nuxt, y Angular cuenta con su tecnología Universal.

El principal inconveniente de esta estrategia es que puede tener un impacto negativo significativo en TTI. A pesar de mejorar considerablemente el FP, este tipo de renderizado a menudo se ve engañoso ya que parece cargado e interactivo, pero en realidad no puede responder a las entradas de eventos hasta que se ejecuta completamente el javascript del lado del cliente. Este proceso puede llevar algunos segundos en dispositivos móviles.

Sin embargo, aprovechando estrategias como la hidratación progresiva, que permite rehidratar componentes aprovechando la Api de Intersection Observer, se puede optimizar y paliar bastante los problemas en el tiempo de interacción.

## Levantando el proyecto

Para desarrollar

```
npm install
npm run dev
```

Ejecutar

````
npm run build
npm start
```
````
