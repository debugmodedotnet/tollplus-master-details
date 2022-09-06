import { Component } from '@angular/core';
import { IProduct } from './entities/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master Details Demo';
  isDetailDisplayed = false;
  pForDetail? : IProduct; 

  showProductDetails(p: IProduct) {
    if (p != undefined) {
      this.isDetailDisplayed = true;
      this.pForDetail = p; 
     // console.log(p);
    }
  }

  closeProductDetail(value : boolean){
    this.isDetailDisplayed = false; 
  }
}
