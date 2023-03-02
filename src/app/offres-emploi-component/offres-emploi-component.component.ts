import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi!:Emploi[];
  alert!:number;

  constructor(private Calcul:CalculService) { }

  ngOnInit(): void {
    this.listeEmploi=[{
      reference:"ayoub",title:"aa",entreprise:"vermeg",etat:true},{
        reference:"hmed",title:"bb",entreprise:"Actia",etat:false}]
        this.alert=this.Calcul.getNumberOf(this.listeEmploi,"etat",false);
  }
  postuler(){}
  Calculer(){
    
  }

}
