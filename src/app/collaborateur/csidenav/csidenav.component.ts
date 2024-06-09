import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-csidenav',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterOutlet , RouterModule],
  templateUrl: './csidenav.component.html',
  styleUrl: './csidenav.component.css'
})
export class CsidenavComponent {
  public myDate = new Date();
}
