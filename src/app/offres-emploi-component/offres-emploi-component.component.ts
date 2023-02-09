import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi!:Emploi[];

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[{
      reference:"ayoub",title:"aa",entreprise:"vermeg",etat:true},{
        reference:"hmed",title:"bb",entreprise:"Actia",etat:false}]
  }
  postuler(){}
  Calculer(){
    
  }

}
