import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EdonComponent } from './edon/edon.component';

export const routes: Routes = [
    {path:"", redirectTo:'edon', pathMatch:'full'},
    {path:"edon", component:EdonComponent},
    {path:'registro', component:RegistroComponent},
    {path:'inicio-sesion', component:InicioSesionComponent},
];