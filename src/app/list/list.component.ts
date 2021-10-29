import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
