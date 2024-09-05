import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarrerasComponent } from '../carreras/carreras.component';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CarrerasComponent],
  templateUrl: './menu-navegacion.component.html',
  styleUrl: './menu-navegacion.component.css'
})
export class MenuNavegacionComponent {

}
