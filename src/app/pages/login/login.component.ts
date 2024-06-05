import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
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
      this.apiUser.login(this.userForm.value).subscribe(user=>{
        alert("Đăng nhập thành công")
        localStorage.setItem('user',JSON.stringify(user))
        this.router.navigate(['/'])
      })
    }
  }
}
