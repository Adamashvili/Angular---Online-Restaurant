import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {

  constructor(private service: ApiService, public route: Router) {}
  ngOnInit(): void {
    this.showCategories();
    this.showAllProducts()
  }

  public categories: any;
  public foodList: any;
  public activeCategory: number = 0
  public isPopuped: boolean = false
  public itemQuantity: string = "1";
  public dataToPost:any;

  showCategories() {
    this.service.getCategories().subscribe((items) => {
      this.categories = items;
    });
  }

  showAllProducts() {
    this.service.getAllProducts().subscribe((data) => {
      this.foodList = data;
      this.activeCategory = 0
    });
  }

  showProductsByCategory(itemID: number) {
    this.service.getProductsByCategory(itemID).subscribe((data:any) => {
        this.foodList = data.products
        this.activeCategory = itemID
    })
  }

  getFilteredData(filterData: any) {
    this.service.filterProducts(filterData.vegeterian, filterData.nuts, filterData.spiciness).subscribe(data => {
      this.foodList = data
      this.activeCategory = -1
      
    })
    
  }

  openModal(item:any) {
    this.isPopuped = true
    this.dataToPost = item
    
    
  }

  addToCart(){
    this.service.addToCart({
      "quantity": this.itemQuantity,
      "price": this.dataToPost.price,
      "productId": this.dataToPost.id
    }).subscribe({
      next: () => {
        alert("Product added to cart successfully")
        this.isPopuped = false;
      },
      error: () => alert("Try again...")
    })
    
    
  }

  closeModal(){
    this.isPopuped = false
    this.itemQuantity = "1";
  }

  gotoDetails(item: any) {
      this.route.navigate(["/foodDetails"], {queryParams: item})
    }
}
