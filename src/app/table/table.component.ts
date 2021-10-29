import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;
  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }
}
