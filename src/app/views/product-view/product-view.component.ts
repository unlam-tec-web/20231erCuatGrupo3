import {Component} from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent{

  products = [
    { id:'1',
      type: 'Cerveza',
      name:'Heineken 6x 355cc',
      details:'Rubia',
      description: 'Six pack de cerveza Heineken en lata de 355cc.',
      brand:'Heineken',
      price:'3000' },
    { id:'2',
      type: 'Vinos',
      name:'Alamos Chardonay 750ml',
      details:'Blanco',
      description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
      brand:'Alamos',
      price:'2081' },
    { id:'3',
      type: 'Vinos',
      name:'Alamos Chardonay 750ml',
      details:'Blanco',
      description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
      brand:'Alamos',
      price:'2081' },
    { id:'4',
      type: 'Cerveza',
      name:'Budweiser 410cc',
      details:'Rubia',
      description: 'Cerveza Budweiser en lata de 410cc.',
      brand:'Budweiser',
      price:'260' },
  ];

}
