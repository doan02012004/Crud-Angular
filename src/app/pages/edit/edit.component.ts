import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  public productId!:number;
  public productData:FormGroup|any;
  constructor(private api:ProductsService, private activeRouter: ActivatedRoute, private router: Router, private FormBuilder:FormBuilder) {

  }
    ngOnInit(): void {
      this.productData = this.FormBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        image: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(1)]]
      })
        this.activeRouter.params.subscribe((params:Params) => {
          this.productId = params['id']
        })
        this.api.getById(this.productId).subscribe((product) => {
          this.productData.patchValue({
            name: product.name,
            image: product.image,
            price: product.price
          })
        })
    }
    onUpdate(){
      if(this.productData.valid){
        this.api.updateProduct(this.productData.value,this.productId).subscribe(res => {
          this.router.navigate(['/'])
        })
      }else{
        console.log("Update fail")
      }
    }
}
