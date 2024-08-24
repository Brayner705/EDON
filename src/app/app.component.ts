import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuNavegacionComponent} from './menu-navegacion/menu-navegacion.component';
import {CarrerasComponent} from './carreras/carreras.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuNavegacionComponent, CarrerasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EDON';
}
