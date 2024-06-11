import { Component, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'

/*@ts-ignore*/
@Component({
  selector: 'app-ajoutbon',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './ajoutbon.component.html',
  styleUrl: './ajoutbon.component.css',
})
export class AjoutbonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ajouterBon() {
    this.router.navigate(['/ajoutbon'])
  }

  nom: string = ''
  matricule: string = ''
  medecin: string = ''
  date: string = ''
  photo: string = ''

  role: string = localStorage.getItem('role') as string

  setNom(event: any) {
    this.nom = event.target.value
  }

  setMatricule(event: any) {
    this.matricule = event.target.value
  }

  setMedecin(event: any) {
    this.medecin = event.target.value
  }

  setDate(event: any) {
    this.date = event.target.value
  }

  setPhoto(event: any) {
    this.photo = event.target.value
  }

  //console.log file
  file: any = null
  setFile(event: any) {
    this.file = event.target.files[0]
    console.log('C:\\Users\\Chaime\\Desktop\\' + this.file.name)
  }

  ajoutBon() {
    const bonBody: any = {
      nom: this.nom,
      matricule: this.matricule,
      medecin: this.medecin,
      date: this.date,
      photo: 'C:\\Users\\Chaime\\Desktop\\' + this.file.name,
    }

    console.log(bonBody)

    try {
      fetch('http://localhost:8083/api/v1/bon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bonBody),
      }).then((response) => {
        console.log(response)
        if (response.status === 200) {
          window.alert('bon ajouté avec succès')
          console.log('bon ajouté avec succès')
        }
      })
    } catch (e) {
      console.log(e)
    }

    console.log(bonBody)
  }
}
