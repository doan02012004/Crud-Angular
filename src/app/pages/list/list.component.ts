import { Component } from '@angular/core';
import { Iproduct } from '../../interface/product';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Iproduct[]=[]
  productForm:Iproduct = {
    name:"",
    image:"",
    price:0,
  }
  constructor(private ProductService: ProductsService){
    this.ProductService.getAll().subscribe(products => {this.products = products})
  }

  onDelete(product:Iproduct){
    this.products = this.products.filter((item) => item.id != product.id)
    this.ProductService.deleteProduct(product.id).subscribe()
  }
}
