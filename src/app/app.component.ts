import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenuNavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EDON';
}
