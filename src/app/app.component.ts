import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

/**
 * Componente raíz de la aplicación Angular
 *
 * Este componente actúa como el contenedor principal y punto de entrada para toda la aplicación.
 *
 * Características y funcionamiento:
 * 1. Componente Standalone: No requiere un NgModule declarativo, simplificando la estructura de la app.
 *
 * 2. Importaciones:
 *    - Importa RouterOutlet, permitiendo la integración con el sistema de enrutamiento de Angular.
 *
 * 3. Selector 'app-root':
 *    - Este selector se usa en el index.html para insertar este componente como raíz del DOM de la aplicación.
 *
 * 4. Plantilla:
 *    - Define la estructura básica presente en todas las páginas de la aplicación.
 *    - Incluye <router-outlet>, donde se renderizarán dinámicamente otros componentes según la ruta actual.
 *
 * 5. Interacción con el resto de la app:
 *    - Sirve como contenedor para todos los demás componentes.
 *    - El <router-outlet> permite que los componentes definidos en app.routes.ts se muestren aquí.
 *    - Cualquier contenido fuera del <router-outlet> (como el título h1) estará presente en todas las vistas.
 *
 * 6. Estilos:
 *    - Puede incluir estilos globales que se aplicarán a toda la aplicación.
 *
 * Este componente es fundamental para la estructura de la SPA (Single Page Application),
 * proporcionando un marco consistente mientras el contenido interno cambia basado en la navegación del usuario.
 */


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Rick and Morty Characters</h1>
    <!-- RouterOutlet es donde se renderizarán los componentes según la ruta actual -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "rick-and-morty-app"
}