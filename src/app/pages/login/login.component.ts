import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Iuser } from '../../interface/auth';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: FormGroup|any;
  constructor(private apiAuth: AuthService, private fb: FormBuilder, private router: Router){}
  ngOnInit(): void {
      this.userData = this.fb.group({
        email: ["",[Validators.required,Validators.minLength(6)]],
        password: ["",[Validators.required,Validators.minLength(6)]],
      })
  }
  onSubmit(){
    if(this.userData.valid){
      this.apiAuth.Login(this.userData.value).subscribe(user =>{
        localStorage.setItem('user', JSON.stringify(user))
        this.router.navigate(['/'])
      })
    }
    else{
      console.log("Fail")
    }
  }
}
