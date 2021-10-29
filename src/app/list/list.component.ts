import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class ListComponent implements OnInit {
  closeResult = '';
  autos: Automovil[] = [];
  autoSeleccionado? : Automovil;
  

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onSelect(auto : Automovil, content: any){
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
}