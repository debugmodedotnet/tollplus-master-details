import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Products } from '../data/product-details.data';
import { IProductDetail } from '../entities/product-detail.entity';
import { IProduct } from '../entities/product.entity';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit , OnChanges, OnDestroy {

  @Input() product? : IProduct; 
  products : IProductDetail [] = []; 
  productToDispaly? : IProductDetail; 
  @Output() closeDetailEvent = new EventEmitter<boolean>();
  quantity : number = 0; 
  constructor() { }

  ngOnInit(): void {

    // this.products = Products; 
   // console.log(this.products);
  }

  closeProductDetail(){
   this.closeDetailEvent.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let p in changes){
      if(p == 'product'){
          if(changes[p].isFirstChange() == true){
            this.products = Products; 
            console.log(this.products);
          }
      }
    }
     let pIndex = this.products.findIndex(p => p.Product.Id == this.product?.Id)
     if(pIndex != -1){
        this.productToDispaly = this.products[pIndex]; 
        this.quantity = this.productToDispaly.Product.Quantity;
     }

  }

  saveProductDetail(){

  }

  ngOnDestroy(): void {
    if(this.quantity != this.productToDispaly?.Product.Quantity){
      alert('ypu have unsaved data');
    }
  }

}
