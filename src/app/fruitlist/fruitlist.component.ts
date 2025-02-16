import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

fruitlistdata = inject(FruitlistdataService);

howItWorks = "supr trupr!";
fontColorgood = 'green';
fontColorbad = 'red';



  addComment(comment:string, index:number){
    this.fruitlistdata.fruitlist[index].reviews.push({
      name: "Barbora",
      text: comment,
    })
}

nameLog(name:string) {
  console.log(name);
}

}
