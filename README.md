# 🧪 Ejercicios de Estilos - CSS Modules, Objeto Style y Tailwind CSS

Enlace al diseño: https://www.figma.com/community/file/1222060007934600841

Enlace a "Búsqueda landing website": https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=website+landing&editor_type=all&price=free&creators=all

## 🌟 Objetivo

Practicar CSS Modules, Objeto Style y Tailwind CSS.

Este ejercicio no tiene un resultado específico o exacto en cuanto a código. Es un ejercicio relativo donde se espera que explores y experimentes con diferentes enfoques para aplicar estilos en tus componentes.

Bien, los objetivos son 2.

1. Empezar a usar Tailwind CSS en un proyecto de React. Así como explorar su documentación.
2. Empezar a trabajar con Figma para que aprendas a crear una web basado en un diseño ya dado.

---

## 🚀 Pasos iniciales

### 1) Crea un nuevo repositorio en tu GitHub

Nombre sugerido: `react-style-landing-website`. Haz commits pequeños y claros.

### 2) Crea un proyecto base con Vite (React + JS)

```bash
npm create vite@latest react-style-landing-website -- --template react
cd react-style-landing-website
npm i
npm run dev
npm i tailwindcss @tailwindcss/vite
```

Configura Tailwind CSS como hemos visto en clase. Tendrás que añadir 3 cosas:

1. En `index.css`:

```css
@import "tailwindcss";
```

2. Crear el archivo `tailwind.config.js` en la raíz del proyecto con el siguiente contenido:

```js
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

3. Añadir tailwind en la configuración de vite. El archivo `vite.config.js` debe quedar así:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwind()],
});
```

### 3) Limpia el proyecto

Deja un `App.jsx` simple y crea carpetas (añade todas las que necesites).

### 4) Instalación de Router

Si lo consideras, puedes instalar el router para crear rutas en tu aplicación. Esto no es obligatorio, queda a tu elección en caso que lo necesites.

---

## ✅ Requisitos

-   **Código y nombres en inglés.**
-   React con **JavaScript** (sin TypeScript).
-   Usa principalmente Tailwind

---

## Diseño

Se trata de un diseño de una página de aterrizaje (landing page) para una emoresa de servicios. Estas imagenes están guardadas de Figma.

Te recomiendo que directamente abras el diseño el Figma en lugar de usar las imágenes que están en la carpeta `/images`.

En la próxima clase veremos cómo usar Figma, de momento, apáñate con Figma como buenamente puedas.

Enlace al diseño propuesto en Figma: [Abrir en Figma](https://www.figma.com/community/file/1222060007934600841)

Si en lugar de seguir el diseño propuesto quieres atreverte a buscar otro diseño y llevarlo a cabo, eres totalmente libre de hacerlo y estará bien también.

Puedes buscar en Figma `"landing website"`. Te dejo un enlace a esta búsqueda: [Buscar en Figma](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=website+landing&editor_type=all&price=free&creators=all)

Bien, en la carpeta `/images` encontrarás el diseño propuesto a seguir. Concretamente en `/images/DesignLandingWeb.png`.

-   ¿Es obligatorio seguir el diseño? NO. Puedes crear la web como tú quieras, pero es recomendable que sigas el diseño para practicar.

-   ¿Y los demás archivos?: Te pueden servir como referencia para entender mejor el diseño y los elementos que componen la página.

-   ¿Tengo que hacer toda la web completa?: No. No es necesario. Los requisitos mínimos son: 1 componente con CSS Modules, 1 componente con estilos en línea y 6 componentes con Tailwind CSS.

Ahora bien, cuanto más practiques, más soltura cogerás tanto con Tailwind CSS como con React.

---

## 🧹 Ejercicios

> ⚠️ **Todo en inglés** (nombres de variables, funciones y componentes).

Este ejercicio consiste en crear una web basada en un diseño de figma.

‼️ NO es necesario replicar el diseño al nivel de pixel perfect, el diseño solo pretende servir como guía.

‼️ NO es necesario crear toda la web completa, solo lo que consideres necesario para practicar los ejercicios que se plantean.

‼️ Si no quieres usar el diseño propuesto, puedes buscar otro diseño en Figma y llevarlo a cabo. Ya sea un proyecto personal que quieras empezar o uno que encuentres interesante.

---

### 1) Practicar estilos en línea con `style`

**Objetivo:** Crear un solo componente del diseño (a tu elección) y aplicar estilos en línea utilizando el objeto `style`. Este componente no puede tener otro tipo de estilos.

**Instrucciones:** Puedes crear el componente que decidas. Si no sabes cual elegir, puedes optar por el `<Navbar />`, el `<Footer />`, o el `<Header />`.

---

### 2)

**Objetivo:** Crea un solo componente del diseño (a tu elección) y aplica estilos en línea utilizando CSS Modules. Recuerda, necesitarás crear un archivo `.module.css` para los estilos.

**Instrucciones:** Tal como hemos visto en clase, necesitarás 2 archivos. `ComponentName.jsx` y `ComponentName.module.css`.

**Pistas:**

-   Importa los estilos en el componente utilizando `import styles from './ComponentName.module.css'`.

---

### 3)

**Objetivo:** Usar Tailwind para darle estilos a la web. El objetivo es que ganes experiencia y costumbre con esta librería, ya que será la que usemos a partir de ahora.

**Instrucciones:** Bien, ahora que has creado tus componentes utilizando `style` y CSS Modules, es momento de aplicar Tailwind CSS. Elige un componente y empieza a aplicar clases de Tailwind para estilizarlo. En la carpeta `/images` de este proyecto, encontrarás tanto el diseño recomendado a crear como imágenes de referencia. Bien, **no** es obligatorio que sigas este diseño, pero si que como mínimo necesitas crear 6 componentes y todos deben estar estilizados con Tailwind.

El objetivo es que principalmente uses Tailwind ya que será la librería que usemos a partir de ahora.

**Pistas:**

-   Recuerda abrir la documentación de tailwind y usar el buscador para encontrar las clases que necesitas.

---
