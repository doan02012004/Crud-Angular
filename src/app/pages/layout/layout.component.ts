import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../interfaces/product';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
    productId!:number|string|undefined
    openForm: boolean = false
    products!:Iproduct[]
    productForm:FormGroup|any
    optionForm:"add"|"update" = "add"
    constructor(private apiProduct:ProductService ,private fb: FormBuilder){}
    ngOnInit(): void {
        this.productForm = this.fb.group({
          name:["",[Validators.required]],
          price:["",[Validators.required, Validators.min(1)]],
          image:["",[Validators.required]],
        })
        this.apiProduct.getAll().subscribe(products=>{
          this.products = products
        })
    }
    onOpenForm(){
      this.openForm = true
      this.optionForm = 'add'
    }
    onCloseForm(){
      this.openForm = false
      this.productForm.reset()
    }

    onDelete(id:string|number|undefined){
      if(confirm("Bạn có muốn xóa không?")){
        this.apiProduct.remove(id).subscribe(res=>{
          this.products = this.products.filter(item=> item.id != id)
        })
      }
    }
    onSubmit(){
      if(this.productForm.valid){
        if(this.optionForm=='add'){
          this.apiProduct.addProduct(this.productForm.value).subscribe(product=>{
            alert("Thêm thành công!")
            this.products.push(product)
            this.openForm = false
            this.productForm.reset()
          })
        }
        else{
          this.apiProduct.update(this.productForm.value, this.productId).subscribe(product=>{
            alert("Cập nhật thành công!")
            this.products = this.products.map(item => item.id == this.productId?product:item)
            this.openForm = false
            this.productForm.reset()
          })
        }
      }
    }
    onUpdate(product:Iproduct){
        this.optionForm = 'update'
        this.openForm=true
        this.productId = product.id
        this.productForm.patchValue(product)
    }
}
