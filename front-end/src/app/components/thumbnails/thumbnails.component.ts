import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../assets/interfaces/product.interface";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent {
  @Input() img : any = '';
  @Input() id : any = '';
  @Input() name : any = '';

  constructor(
    protected router:Router
  ){}

  viewCategory(id : number, name : string){
    this.router.navigate(['/category',id])
  }
}
