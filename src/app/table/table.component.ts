import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;
  constructor(private autoService:AutoService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response) =>{
      this.autos = response.data;
    })
  }
}
