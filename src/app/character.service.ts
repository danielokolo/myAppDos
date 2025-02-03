import { Injectable, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"

/**
 * Servicio para manejar las operaciones relacionadas con los personajes de Rick and Morty
 *
 * Este servicio actúa como una capa de abstracción entre la API de Rick and Morty y los componentes de la aplicación.
 *
 * Características y funcionamiento:
 * 1. Injectable y Singleton:
 *    - Usa @Injectable con 'providedIn: root', lo que lo hace disponible en toda la app como un singleton.
 *    - Esto asegura que todas las partes de la app usen la misma instancia del servicio.
 *
 * 2. Encapsulación de la lógica de API:
 *    - Centraliza todas las llamadas a la API de Rick and Morty.
 *    - Abstrae la complejidad de las peticiones HTTP de los componentes.
 *
 * 3. Uso de HttpClient:
 *    - Utiliza el servicio HttpClient de Angular para realizar peticiones HTTP.
 *    - HttpClient se inyecta usando la función 'inject' de Angular, evitando problemas con importaciones de tipo.
 *
 * 4. Métodos del servicio:
 *    - getCharacters(): Obtiene la lista de todos los personajes.
 *    - getCharacter(id): Obtiene los detalles de un personaje específico.
 *    - Ambos métodos devuelven Observables, permitiendo un manejo asíncrono de los datos.
 *
 * 5. Interacción con la app:
 *    - Los componentes pueden inyectar este servicio y usar sus métodos para obtener datos.
 *    - Permite una separación clara entre la lógica de obtención de datos y la lógica de presentación.
 *
 * 6. Reutilización y mantenimiento:
 *    - Centraliza la lógica de API, facilitando cambios futuros en la fuente de datos.
 *    - Promueve la reutilización de código en diferentes partes de la aplicación.
 *
 * Este servicio es fundamental para la arquitectura de la aplicación, proporcionando
 * una forma limpia y eficiente de manejar las operaciones de datos relacionadas con los personajes.
 */
@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private apiUrl = "https://rickandmortyapi.com/api/character/?page = 20"
  private http = inject(HttpClient)

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}

