import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css',
})
export class FoodDetailsComponent implements OnInit {
  constructor(public actRoute: ActivatedRoute, public service: ApiService) {}
  ngOnInit(): void {
    this.getQuery()
  }

  public foodDetails: any;
  public itemQuantity: string = "1"

  getQuery() {
    this.actRoute.queryParams.subscribe((data) => {
      this.foodDetails = data;
    });
  }

  addToCart(item: any) {
    this.service.addToCart({
      "quantity": this.itemQuantity,
      "price": item.price,
      "productId": item.id
    }).subscribe({
      next: () => {
        alert("Product added to cart successfully")
      
      },
      error: () => alert("Try again...")
    })
  } 

}
