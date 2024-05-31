import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  productForm: FormGroup|any;
  constructor(private fb: FormBuilder, private router:Router, private api: ProductsService) { }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]]
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm.value);
      this.api.addProduct(this.productForm.value).subscribe(product => {
        this.router.navigate(["/"]);
        this.productForm.reset()
      })

      // Logic để xử lý form hoặc gửi dữ liệu lên server
    } else {
      console.log('Form is invalid!');
    }
  }
}
