import { Component, OnInit } from '@angular/core';
import { information } from '../core/model/information';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  information!:information
  constructor() { }

  ngOnInit(): void {
    this.information=new information
  }

}
