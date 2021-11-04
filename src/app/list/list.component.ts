import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { AutoService } from '../services/auto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class ListComponent implements OnInit {
  page=1;
  pageSize=20;
  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;
  

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response) =>{
      this.autos = response.data;
    })
  }

  onSelect(auto : Automovil, content: any){
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal, private autoService: AutoService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
}