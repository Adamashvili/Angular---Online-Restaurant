import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private service: ApiService){}
  ngOnInit(): void {
    this.getCartList()
  }

  public cartList: any

  getCartList() {
    this.service.getCartItems().subscribe(data => {
      console.log(data);
      this.cartList = data
    })
  }
}
