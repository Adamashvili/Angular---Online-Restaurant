import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private service: ApiService, public toolsServ: ToolsService) {}

  ngOnInit(): void {
    this.getCartList();
    
  }

  public cartList: any;
  public totalPrice: any;

  getCartList() {
    this.service.getCartItems().subscribe((data) => {
      this.cartList = data;
     this.totalPriceFn(data)
      this.toolsServ.cartItemNumber.next(this.cartList.length)

    
    });
  }

  increaseItem(item: any) {
    item.quantity++;
    this.service
      .updateCartItem({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })
      .subscribe(() => {
        
      });
  
  }

  decreaseItem(item: any) {
    if (item.quantity >= 2) {
      item.quantity--;
      this.service
        .updateCartItem({
          quantity: item.quantity,
          price: item.product.price,
          productId: item.product.id,
        })
        .subscribe(() => {
        
        });
     
    }
  }

  deleteItem(id: number, name: string) {
    this.service.deleteCartItem(id).subscribe({
      next: () => {
        alert(`${name} removed from cart successfully`);
        this.getCartList();
       
      },
      error: (err) => alert(err),
    });
  }

  totalPriceFn(listNum: any) {
   if(listNum) {
    let prices = listNum.map((item: any) => {
      return item.product.price * item.quantity;
    });

    if (prices.length > 0) {
      let total = prices.reduce((prev: number, crnt: number) => {
        return prev + crnt;
      });

      this.totalPrice = total;
    } else {
      this.totalPrice = 0;
    }
  ;
}
   }

      
}
