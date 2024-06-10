import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatSort, MatSortModule } from '@angular/material/sort'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Dialog1Component } from '../dialog1/dialog1.component'
import { DialogComponent } from '../dialog/dialog.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

export interface MedecinData {
  id: number
  nom: string
  matricule: String
  specialite: string
}

/*@ts-ignore */
@Component({
  selector: 'app-listemedecin',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css'],
})
export class ListemedecinComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'tel', 'specialite', 'action']
  dataSource: MatTableDataSource<MedecinData>
  medecin: any = []
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(private dialog: MatDialog) {
    this.fetchMedecin()
    this.dataSource = new MatTableDataSource(this.medecin)
  }
  openajouterMedecin() {
    const nouvelMedecin: MedecinData = {
      id: this.dataSource.data.length + 1,
      nom: 'Nouveau',
      matricule: '000000000',
      specialite: '000000000000000',
    }
    this.dataSource.data.push(nouvelMedecin)
    if (this.paginator) {
      this.paginator._changePageSize(this.paginator.pageSize)
    }
  }

  ngAfterViewInit() {
    // Configurez  pagination et  tri
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
  ajouterMedecin(): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
    })
  }

  modifierMedecin(row: any): void {
    this.dialog.open(Dialog1Component, {
      width: '50%',
      data: row,
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Le dialogue a été fermé, données reçues:', result)
    })
  }

  fetchMedecin() {
    fetch('http://localhost:8083/api/v1/medecin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.medecin = data
        console.log(data)
      })
  }
}
