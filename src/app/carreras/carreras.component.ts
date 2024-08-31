import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  @ViewChild("contenedor") contenedor!: ElementRef<HTMLDivElement>;
  @ViewChild("canvas") canvas!: ElementRef<HTMLCanvasElement>;

  color:string[] = [];

  ngOnInit(){
    this.cargarimagenYExtraerColor(this.imagePath);
  }
  cargarimagenYExtraerColor(imgSrc:string){
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = ()=>{
      this.extraerColores(img);
    }
    img.src = imgSrc;
  }

  extraerColores(img:HTMLImageElement){
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;

    canvas.width = 500;
    canvas.height = 100;

    ctx.drawImage(img,0,0,500,100);

    const imageData = ctx.getImageData(0,0,500,100);
    const data = imageData.data;

    const colorSet: Set<string> = new Set();

    for(let i=0;i< data.length;i+=4){
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const color = `rgb(${r},${g},${b})`;

      colorSet.add(color);
    }
    this.color = Array.from(colorSet);
    this.contenedor.nativeElement.style.backgroundColor = this.color[this.obtenerNumeroRandom(0,this.color.length)];

  }

  obtenerNumeroRandom(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
} 
