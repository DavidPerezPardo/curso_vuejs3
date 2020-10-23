# Curso Vuejs 3 - Udemy 🎓 - En Curso...

<p> 🔎 <a href="https://www.udemy.com/course/complete-vuejs-3-crash-course-composition-api-vue-router-vuex/" target="_blank">Complete Vue.js 3 (Inc. Composition API, Vue Router, Vuex)</a></p>
<hr>

### 📜 Descripción:
<p>Proyecto realizado con las prácticas que he ido haciendo mientras seguía el curso, con los distintos contenidos estudiados.</p>

<p>El proyecto se estructura en un archivo main.js, ( desde el cuál se importa 'vue' y los distintos componentes principales, librerías, etc.. )
  y en distintos componentes vue principales, a modo de 'pequeñas aplicaciones', para poner en práctica los contenidos del curso:</p>

*   src/main.js
*   pokemons/App.js
*   microblog/App.js
*   router/App.js

<p>Para crear el proyecto Vuejs y su scaffolding, he utilizado:</p>

*   npm
*   Vite

<strong>Vite es una herramienta para generar y compilar un proyecto en vuejs 3.</strong>

<p>Con npm:</p>

*   npm init vite-app < project-name >
*   cd <project-name>
*   npm install
*   npm run dev

### ⚙ Instalación:

Descargar o clonar repositorio:
* git clone https://github.com/DavidPerezPardo/curso_vuejs3.git
  
<p> Dentro del directorio del proyecto:</p>

* npm install
* npm run dev

<hr>

#### Nota:
<p>Para cambiar de componente principal ( mini-aplicación ) del proyecto, lo haremos desde el archivo src/main.js, pasando como parámetro al método <code>createApp()</code> el nombre del componente principal que queramos montar:

<code>
  
    import { createApp } from 'vue'

    import Pokemon from '../pokemon/App.vue'
    import Microblog from '../microblog/App.vue'
    import ....
    
    createApp(Microblog).mount('#app')
    
</code>
