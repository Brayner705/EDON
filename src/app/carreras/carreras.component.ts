import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.css',
})
export class CarrerasComponent {
  @Input() imagePath: string = '';
  @Input() logoPath: string = '';
}
