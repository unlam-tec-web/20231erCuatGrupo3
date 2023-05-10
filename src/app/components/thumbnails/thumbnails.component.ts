import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent {
  @Input() img : any = '';
  @Input() price : any = '';
  @Input() name : any = '';
}
