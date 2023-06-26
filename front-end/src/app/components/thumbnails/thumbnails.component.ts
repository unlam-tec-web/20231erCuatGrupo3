import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent {
  @Input() img : any = '';
  @Input() id : any = '';
  @Input() type : any = '';

  constructor(
    protected router:Router
  ){}

  viewCategory(type : string){
    this.router.navigate(['/category',type])
  }
}
