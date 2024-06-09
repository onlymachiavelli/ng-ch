import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TableData {
  matricule: string;
  photo: string;
  id: number;
  aide_execptionnelle: string;
  allouche_aid: string;
  frais_medicaux: string;
  aide_social: string;
  anciennete: string;
  autres: string;
  clinique: string;
  couffin_ramadan: string;
  credits: string;
  date: string;
  situation: string;
  tel: string;
  de: string;
}

@Component({
  selector: 'app-coll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coll.component.html',
  styleUrls: ['./coll.component.css']
})
export class CollComponent {
  
  public myDate=new Date();
  data: TableData[] = [
    {
      matricule: '12345',
      photo: 'assests/coll.jpg',
      id: 1,
      aide_execptionnelle: 'Yes',
      allouche_aid: 'No',
      frais_medicaux: '1000',
      aide_social: 'Yes',
      anciennete: '5 years',
      autres: 'None',
      clinique: 'Clinique A',
      couffin_ramadan: 'Yes',
      credits: '2000',
      date: '2024-05-24',
      situation: 'Active',
      tel: '123-456-7890',
      de: 'N/A'
    },
   
  ];
}
