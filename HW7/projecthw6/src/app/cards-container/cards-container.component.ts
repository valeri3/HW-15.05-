import {Component, OnInit, Input, Output, EventEmitter, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsBlockComponent} from "../cards-block/cards-block.component";
import {NgFor} from "@angular/common";

class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public color: string
  ) {
  }
}

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CommonModule, CardsBlockComponent, NgFor],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [];
  }

  ngOnInit(): void {
    const productData = [
      {id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: 'lightcoral'},
      {id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: 'tan'},
      {id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: 'lightsteelblue'},
    ];

    for (const data of productData) {
      this.products.push(new Product(data.id, data.name, data.price, data.description, data.color));
    }
  }

  selectedProduct: any;

  @Output() viewDetails = new EventEmitter<any>();

  viewProductDetails(product: any) {
    this.selectedProduct = product;
    this.viewDetails.emit(this.selectedProduct);
  }
}
