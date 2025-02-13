import { Routes } from '@angular/router';
import path from 'path';
import { FruitlistComponent } from './fruitlist/fruitlist.component';

export const routes: Routes = [
    { path : '', component: FruitlistComponent },   //falls path leer, ist es Anfang
];      //alles was hier eingegeben ist, kommt nicht in app.component.html
