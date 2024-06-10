import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products!:Iproduct[]
  constructor(private api: ProductService){}
 ngOnInit(): void {
    this.api.getAll().subscribe(res=>{
      this.products = res
    })
 }
 onRemove(id:string|number|undefined){
  if(confirm("Bạn có muốn xóa không?")){
    this.api.remove(id).subscribe(res =>{
      alert("Xóa thành công")
      this.products = this.products.filter(item=> item.id != id)
    })
  }
 }
}
