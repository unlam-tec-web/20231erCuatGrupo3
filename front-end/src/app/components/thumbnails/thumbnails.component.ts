import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent {
  @Input() img : any = '';
  @Input() price : any = '';
  @Input() name : any = '';

  constructor( protected router:Router){

  }

  onClick(){
    this.router.navigate(['/category'])
  }
}
