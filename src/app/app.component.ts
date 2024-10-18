import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent,LoginComponent,MaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user_authentication';
}
