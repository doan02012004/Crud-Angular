import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  dataForm:FormGroup|any
  constructor( private api: AuthService, private Router: Router, private fb:FormBuilder){}

  ngOnInit(): void {
      this.dataForm = this.fb.group({
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,,Validators.minLength(6)]],
  })
  }
  onSubmit(){
    if(this.dataForm.valid){
      this.api.signin(this.dataForm.value).subscribe(res =>{
        localStorage.setItem('user', JSON.stringify(res))
        this.Router.navigate(['/'])
        alert('Đăng nhập thành công')
      },err =>{
        alert('Đăng nhập thất bại')
      })
    }
  }
}
