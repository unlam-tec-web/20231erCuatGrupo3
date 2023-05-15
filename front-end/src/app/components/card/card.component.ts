import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() img : any = '';
@Input() price : any = '';
@Input() name : any = '';
@Input() id : any = '';
  constructor( protected router:Router){

  }

  viewProduct(id:number){
    this.router.navigate(['/product',id])
  }
}
