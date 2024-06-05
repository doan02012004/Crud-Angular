import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup|any
  constructor(private apiUser:UserService ,private fb: FormBuilder, private router:Router){}
  ngOnInit(): void {
      this.userForm = this.fb.group({
        email:["",[Validators.required, Validators.email]],
        password:["",[Validators.required, Validators.minLength(6)]]
      })
  }
  onSubmit(){
    if(this.userForm.valid){
      this.apiUser.register(this.userForm.value).subscribe(res=>{
        alert("Đăng ký thành công")
        this.router.navigate(['/login'])
      })
    }
  }
}
