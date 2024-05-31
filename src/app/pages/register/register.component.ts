import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iuser } from '../../interface/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
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
      this.apiAuth.Register(this.userData.value).subscribe((user:Iuser) =>{
        this.router.navigate(['/login'])
      })
    }
    else{
      console.log("Fail")
    }
  }
}
