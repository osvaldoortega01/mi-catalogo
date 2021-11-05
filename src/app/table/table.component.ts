import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
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
  auto ?: Automovil;
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
    
    modalRef.result.then(
      (auto) =>
      {this.autoService.updateAutos(auto).subscribe(response => console.log(response) )}
      ),
      (reason: any) => {console.log(reason)}
  }

  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{ centered : true});
    modalRef.componentInstance.accion = 'Agregar';
    
    modalRef.result.then(
      (auto) =>
      {this.autoService.addAutos(auto).subscribe(response => console.log(response) )}
      ),
      (reason: any) => {console.log(reason)}
  }

  openModalDelete(auto: Automovil){
    const modalRef = this.modalService.open(ModalDeleteComponent,{ centered : true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Eliminar';

    modalRef.result.then(
      (auto) =>
      {this.autoService.deleteAutos(auto).subscribe(response => console.log(response))}
      ),
      (reason: any) => {console.log(reason)}

  }
}
