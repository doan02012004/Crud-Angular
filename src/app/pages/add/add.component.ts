import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  dataForm:FormGroup|any
    constructor( private api: ProductService, private Router: Router, private fb:FormBuilder){}

    ngOnInit(): void {
        this.dataForm = this.fb.group({
          name:["",[Validators.required]],
          image:["",[Validators.required]],
          price:["",[Validators.required,Validators.min(1)]],
          description:["",[Validators.required]],
        })
    }
    onSubmit(){
      if(this.dataForm.valid){
        this.api.add(this.dataForm.value).subscribe(res =>{
          this.Router.navigate(['/'])
          alert('Thêm sản phẩm thành công')
        },err =>{
          alert('Thêm sản phẩm thất bại')
        })
      }
    }
}
