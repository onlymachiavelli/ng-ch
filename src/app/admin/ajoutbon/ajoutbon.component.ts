import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutbon',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule],
  templateUrl: './ajoutbon.component.html',
  styleUrl: './ajoutbon.component.css'
})
export class AjoutbonComponent implements OnInit {

constructor(private  router:Router){}
  
ngOnInit(): void {
  
}

ajouterBon (){
  this.router.navigate(['/ajoutbon']);
}


}
