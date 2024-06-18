import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    this.showCategories();
    this.showAllProducts()
  }

  public categories: any;
  public foodList: any;

  showCategories() {
    this.service.getCategories().subscribe((items) => {
      this.categories = items;
    });
  }

  showAllProducts() {
    this.service.getAllProducts().subscribe((data) => {
      this.foodList = data;
    });
  }
}
