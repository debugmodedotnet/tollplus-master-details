import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../data/products.data';
import { IProduct } from '../entities/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProduct[] = []; 
  @Output() productDetailEvent = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
    this.products = Products; 
  }

  showDetails(p: IProduct){
    this.productDetailEvent.emit(p);
  }

}
