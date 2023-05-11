import {Component} from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent{

  quantity : number =1;
  stock : number =10;

  products = [
    {
      id:'1',
      type: 'Cerveza',
      name:'Heineken 6x 355cc Sin Alcohol',
      details:'Rubia',
      description: 'Cerveza Heineken Sin Alcohol 0.0% Lata 355ml Pack x6',
      brand:'Heineken',
      price:'3000',
      img:'../../../assets/img/heineken.jpg'
    },
    {
      id:'2',
      type: 'Vinos',
      name:'Alamos Chardonay 750ml',
      details:'Blanco',
      description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
      brand:'Alamos',
      price:'2081',
      img:'../../../assets/img/0019-ALAMOS-CHARDONNAY.jpg'
    },
    {
      id:'3',
      type: 'Vinos',
      name:'Benjamin Malbec 750ml',
      details:'Tinto',
      description: 'Botella de vino blanco, Benjamin Malbec de 750ml.',
      brand:'Benjamin',
      price:'800',
      img:'../../../assets/img/BENJAMIN-MALBEC.jpg'
    },
    {
      id:'4',
      type: 'Cerveza',
      name:'Budweiser 410cc',
      details:'Rubia',
      description: 'Cerveza Budweiser en lata de 410cc.',
      brand:'Budweiser',
      price:'260',
      img:'../../../assets/img/bud-78.png'
    },
  ];

  changeValue($event: any) {
    console.log($event);
  }

  }
