import { Component } from '@angular/core';
import { CarrerasComponent } from '../carreras/carreras.component';

@Component({
  selector: 'app-edon',
  standalone: true,
  imports: [CarrerasComponent],
  templateUrl: './edon.component.html',
  styleUrl: './edon.component.css'
})
export class EdonComponent {
  imagePath(path:string){
    return path;
  }
  logoPath(path:string){
    return path;
  }
}
