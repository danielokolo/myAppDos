import type { Routes } from "@angular/router"
import { CharacterListComponent } from "../app/home/characterList.component"


/**
 * Configuración de rutas de la aplicación
 * 
 * Este archivo define la estructura de navegación de la aplicación Angular.
 * Cada objeto en el array 'routes' mapea una ruta URL a un componente específico.
 * 
 * Funcionamiento:
 * 1. El Router de Angular usa estas definiciones para determinar qué componente mostrar basado en la URL actual.
 * 2. Cuando la URL cambia, el Router busca una coincidencia en estas rutas y renderiza el componente correspondiente.
 * 3. Los componentes se renderizan dentro del <router-outlet> en el template principal.
 * 4. Las rutas pueden incluir parámetros (como :id) que se pueden usar para pasar datos a los componentes.
 * 
 * Interacción con la app:
 * - Se usa en main.ts para configurar el Router (provideRouter(routes)).
 * - Los componentes pueden acceder a los parámetros de ruta usando ActivatedRoute.
 * - Se puede navegar programáticamente usando el servicio Router.
 * - En los templates, se usa [routerLink] para crear enlaces basados en estas rutas.
 * 
 * Este sistema permite una navegación fluida y una estructura de aplicación organizada,
 * facilitando la creación de Single Page Applications (SPAs) dinámicas.
 */

export const routes: Routes = [
  // Ruta raíz: muestra la lista de personajes
  { path: "", component: CharacterListComponent },
  
]