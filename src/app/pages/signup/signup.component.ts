import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  dataForm:FormGroup|any
  constructor( private api: AuthService, private Router: Router, private fb:FormBuilder){}

  ngOnInit(): void {
      this.dataForm = this.fb.group({
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,,Validators.minLength(6)]],
        cfpassword:["",[Validators.required,,Validators.minLength(6)]]
      },{
        validator:(dataForm:FormGroup)=>{
          const password = dataForm.get('password')?.value
          const cfpassword = dataForm.get('cfpassword')?.value
          return password && cfpassword && password !== cfpassword ? {notMatch:true} : null
        }
      })
  }
  onSubmit(){
    if(this.dataForm.valid){
      this.api.signup(this.dataForm.value).subscribe(res =>{
        this.Router.navigate(['/login'])
        alert('Đăng ký thành công')
      },err =>{
        alert('Đăng ký thất bại')
      })
    }
  }
}
