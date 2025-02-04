import { Component, type OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CharacterService } from "../character.service";

@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isLoading" class="loading">Cargando personajes...</div>

    <div *ngIf="error" class="error">
      <p>Error al cargar los personajes. Intenta de nuevo más tarde.</p>
    </div>

    <div *ngIf="characters">
      <div *ngFor="let character of characters.results">
        <div class="character-card">
          <h2>{{ character.name }}</h2>
          <img [src]="character.image" [alt]="character.name" class="character-image">
          <p>Status: {{ character.status }}</p>
          <p>Species: {{ character.species }}</p>
        </div>
      </div>

      <!-- Paginación -->
      <div class="pagination">
        <button (click)="loadPage(page - 1)" [disabled]="page === 1">Anterior</button>
        <span> Página {{ page }} </span>
        <button (click)="loadPage(page + 1)" [disabled]="!characters.info.next">Siguiente</button>
      </div>
    </div>
  `,
  styleUrls: ["./home.component.css"], // Asegúrate de que el nombre del archivo CSS sea correcto
})
export class CharacterListComponent implements OnInit {
  characters: any = null;
  isLoading = true;
  error = false;
  page = 1;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadPage(this.page);
  }

  loadPage(page: number): void {
    if (page < 1) return; // Evitar navegar a una página negativa

    this.isLoading = true;
    this.characterService.getCharacters(page).subscribe({
      next: (data) => {
        this.characters = data;
        this.page = page;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error al obtener personajes", error);
        this.isLoading = false;
        this.error = true;
      },
    });
  }
}
