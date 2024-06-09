import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-msidenav',
  standalone: true,
  imports: [FormsModule,CommonModule , RouterModule ],
  templateUrl: './msidenav.component.html',
  styleUrl: './msidenav.component.css'
})
export class MsidenavComponent {
  public myDate=new Date();
}
