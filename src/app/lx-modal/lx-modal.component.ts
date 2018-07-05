import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-modal',
  templateUrl: './lx-modal.component.html',
  styleUrls: ['./lx-modal.component.css']
})
export class LxModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() icone: string;
  @Input() textoBotao: string;
  @Input() textoBotaoPositivo: string = "OK";
  @Input() textoBotaoNegativo: string = "Cancelar";

  constructor() { }

  ngOnInit() {
  }

}
