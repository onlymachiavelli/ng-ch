import { Component ,OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AjoutbonComponent } from '../admin/ajoutbon/ajoutbon.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-bon',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule,AjoutbonComponent,RouterModule],
  templateUrl: './bon.component.html',
  styleUrls: ['./bon.component.css']
})
export class BonComponent implements OnInit {
 
  bonData: any = {
    nom: '',
    matricule: '',
    medecin: '',
    datedeconsultation: '',
    info: '',
    photo: ''
  };

  constructor(private http: HttpClient, private dialog: MatDialog,private router:Router) {}
  

  ngOnInit(): void {
    this.loadBonData();
  }

  loadBonData(): void {
    this.http.get<any>('http://localhost:8083/getBon').subscribe(
      data => {
        this.bonData = data;
      },
      error => {
        console.error('Error fetching bon data', error);
      }
    );
  }

  navigateToAjoutbon() {
    this.router.navigate(['/ajoutbon']);
  }

 


}
