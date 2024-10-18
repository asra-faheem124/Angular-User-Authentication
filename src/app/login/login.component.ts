import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any = {
    username:'',
    password:''
  }
  router = inject(Router)
  login(){
    if(this.user.username == "admin" && this.user.password == "admin123"){
      localStorage.setItem('username',this.user.username);
      alert("Login Successful");
      this.router.navigateByUrl('data-binding')
    }else{
      alert("Invalid Credentials");
    }
  }
}
