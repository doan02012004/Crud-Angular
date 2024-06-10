import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  dataForm:FormGroup|any;
  productId!:number|string|undefined
  constructor( private api: ProductService, private Router: Router, private fb:FormBuilder,private Route:ActivatedRoute){}

  ngOnInit(): void {
      this.dataForm = this.fb.group({
        name:["",[Validators.required]],
        image:["",[Validators.required]],
        price:["",[Validators.required,Validators.min(1)]],
        description:["",[Validators.required]],
      })
      this.Route.params.subscribe(res =>{
        this.productId = res['id']
      })
      this.api.getById(this.productId).subscribe(product =>{
        this.dataForm.patchValue(product)
      })
  }
  onSubmit(){
    if(this.dataForm.valid){
      this.api.update(this.dataForm.value,this.productId).subscribe(res =>{
        this.Router.navigate(['/'])
        alert('Cập nhật sản phẩm thành công')
      },err =>{
        alert('Update sản phẩm thất bại')
      })
    }
  }
}
