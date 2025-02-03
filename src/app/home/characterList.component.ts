import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { CharacterService } from "../character.service"

/**
 * Componente para mostrar la lista de personajes de Rick and Morty
 *
 * Este componente se encarga de obtener y mostrar la lista de personajes
 * utilizando el CharacterService.
 *
 * Características y funcionamiento:
 * 1. Componente Standalone:
 *    - No requiere un NgModule declarativo, simplificando la estructura de la app.
 *
 * 2. Importaciones:
 *    - CommonModule: Para directivas como *ngIf y *ngFor.
 *    - RouterLink: Para la navegación a los detalles del personaje.
 *    - CharacterService: Para obtener los datos de los personajes.
 *
 * 3. Inyección de dependencias:
 *    - Utiliza el constructor para inyectar el CharacterService.
 *
 * 4. Ciclo de vida:
 *    - ngOnInit: Se utiliza para cargar los personajes cuando el componente se inicializa.
 *
 * 5. Plantilla:
 *    - Muestra una lista de personajes con sus nombres, imágenes y enlaces a sus detalles.
 *
 * Este componente es fundamental para la funcionalidad principal de la aplicación,
 * mostrando la lista de personajes y permitiendo la navegación a sus detalles.
 */
@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="characters">
      <div *ngFor="let character of characters.results">
        <h2>{{ character.name }}</h2>
        <img [src]="character.image" [alt]="character.name">
        <p>Status: {{ character.status }}</p>
        <a [routerLink]="['/character', character.id]">Ver detalles</a>
      </div>
    </div>
  `,
  styles: [],
})
export class CharacterListComponent implements OnInit {
  characters: any

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data) => {
      this.characters = data
    })
  }
}

