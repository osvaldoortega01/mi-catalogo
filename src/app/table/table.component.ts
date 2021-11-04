import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { Automovil } from '../models';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  page=1;
  pageSize=20;
  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;
  constructor(private autoService:AutoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response) =>{
      this.autos = response.data;
    })
  }

  openModalEdit(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{ centered : true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }
}
