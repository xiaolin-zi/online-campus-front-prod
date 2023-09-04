/// <reference types="vite/client" />
<<<<<<< HEAD

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

=======
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
    export default component
}
>>>>>>> 824f9147ed59108a5aefae92b4a9d1ceaf904e4a
