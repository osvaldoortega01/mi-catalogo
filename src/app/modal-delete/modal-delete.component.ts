import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  accion?: string;
  auto : Automovil = {} as Automovil;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
