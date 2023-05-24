import { Component } from '@angular/core';
import products from '../../../assets/json objects/products.json';
import categories from '../../../assets/json objects/categories.json';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  categories = [
    {
      id: '1',
      type: 'Cervezas',
      img: '../../../assets/img/categoriacerveza.jpg'
    },
    {
      id: '2',
      type: 'Vinos',
      img: '../../../assets/img/categoriavino.jpg'
    },
    {
      id: '3',
      type: 'Whiskeys',
      img: '../../../assets/img/categoriawhiskey.jpg'
    },
  ]

  products = [
    {
      id:1,
      type: 'Cerveza',
      name:'Heineken 6x 355cc Sin Alcohol',
      details:'Rubia',
      description: 'Cerveza Heineken Sin Alcohol 0.0% Lata 355ml Pack x6',
      brand:'Heineken',
      price:'3000',
      img:'../../../assets/img/heineken.jpg'
    },
    {
      id:2,
      type: 'Vinos',
      name:'Alamos Chardonay 750ml',
      details:'Blanco',
      description: 'Botella de vino blanco, Alamos Chardonay de 750ml.',
      brand:'Alamos',
      price:'2081',
      img:'../../../assets/img/0019-ALAMOS-CHARDONNAY.jpg'
    },
    {
      id:3,
      type: 'Vinos',
      name:'Benjamin Malbec 750ml',
      details:'Tinto',
      description: 'Botella de vino blanco, Benjamin Malbec de 750ml.',
      brand:'Benjamin',
      price:'800',
      img:'../../../assets/img/BENJAMIN-MALBEC.jpg'
    },
    {
      id:4,
      type: 'Cerveza',
      name:'Budweiser 410cc',
      details:'Rubia',
      description: 'Cerveza Budweiser en lata de 410cc.',
      brand:'Budweiser',
      price:'260',
      img:'../../../assets/img/bud-78.png'
    },
  ];
}
