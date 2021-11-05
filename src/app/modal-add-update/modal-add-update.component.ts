import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';


@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {
  minValue: number = 2000;
  maxValue: number = 2022;
  options: Options = {
    floor: 1980,
    ceil: 2022
  };
  accion?: string;
  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) {   }

  ngOnInit(): void {
  }
  close(): void{
    let modelos: string[] = [];

    for (let i=this.minValue; i<= this.maxValue; i++) {
      modelos.push(i.toString());
    }

    this.auto.modelos=modelos;
    this.activeModal.close(this.auto);
  }
}
