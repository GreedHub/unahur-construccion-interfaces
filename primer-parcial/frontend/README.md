# Parcial CIU Frontend

## Introducción
En este proyecto se creó un cliente de chat que se comunica con el backend para acceder a distintas API de chatbot, siendo la principal DialogFlow, pero permitiendo la expansión a otros modelos como `OpenAI`.

La idea original contemplaba la posibilidad de mantener varios hilos de conversacion con distintos bots donde cada uno implemente un modelo de AI seleccionado por el usuario y de esta forma tener una unica plataforma que permita la comunicación con varias AI de distintas empresas, pero esto si bien fue implementado en el backend, por tema de tiempos no pudo ser implementado en el Frontend.

Una versión de produccion puede encontrarse en:
- [Netlify](https://main--incredible-pegasus-cfa682.netlify.app/)
- [Self-Hosted](https://parcial1-ciu.lglab.com.ar/)

## Diseño
La app se inpira en varios clientes de chat conocidos como pueden ser Telegram, WhatsApp y Discord. El diseño puede visualizarse en [Figma](https://www.figma.com/file/NxIrFh6mAGtPpKSnKGwUFa/Untitled?type=design&node-id=3-43&mode=design&t=7aN5um1BILWuohuy-0)

## Cómo iniciar el proyecto
Luego de clonar el repositorio, se debe: 

1. Acceder a la carpeta `primer-parcial/frontend`
2. Ejecutar el comando `npm i` para instalar las dependencias
3. Ejecutar el comando `npm run dev` para ejecutar el ambiente de desarrollo 

## Cómo compilar el proyecto
Luego de clonar el repositorio, se debe: 

1. Acceder a la carpeta `primer-parcial/frontend`
2. Ejecutar el comando `npm i` para instalar las dependencias
3. Ejecutar el comando `npm run build` para compilar. Esto generará el directorio `dist` con la version compilada del frontend.

Tambien puede generarse una imagen de docker con la dockerfile incluida utilizando el comando `docker build -t <nombre_tag> ./`

## Estructura de la solución
Dentro del directorio `src` del proyecto se enccuantra la siguiente estructura


| Archivo/Carpeta | Descripción |
| --------------- | ----------- |
| src/components  | Directorio raiz para todos los componentes de la interfaz |
| src/context     | Contextos de React |
| src/types       | Definiciones de tipos de TypeScript |
| src/utils       | Librerías de funciones utilitarias |
| src/services    | Servicios de comunicación REST |
| src/assets      | Assets estaticos del proyecto |

```sh
.src
+-- components
|   +-- component_A   
|   |   +-- index.tsx
|   |   +-- style.scss
+-- utils
|   +-- util_A.ts
|   +-- util_B.ts
+-- types     
|   +-- type_A.ts
|   +-- type_B.ts
+-- services     
|   +-- service_A.ts
|   +-- service_B.ts
+-- index.tsx
+-- index.scss
+-- App.tsx
+-- App.scss
```
