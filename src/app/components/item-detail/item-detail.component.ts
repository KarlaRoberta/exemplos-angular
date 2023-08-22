import { Component } from '@angular/core';
import { Animal } from '../parent-data/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/service/list.service';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  animal?: Animal

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal()

  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
