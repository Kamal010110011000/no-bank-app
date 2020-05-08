import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import {Holder} from './holder.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = [
    new Product('Relience Trends', 'https://pbs.twimg.com/profile_images/824303217135808512/bvjZU-6K.jpg',
      5000, 4000, 'Reliance Trends. Reliance Trends is a leading lifestyle retail chain with over 777 retail stores across India. ' +
      'Reliance Trends offers stylish, high-quality products across Womenswear, Lingerie, Menswear, Kidswear and fashion accessories through a ' +
      'diversified portfolio of own brands, national and international brands')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
