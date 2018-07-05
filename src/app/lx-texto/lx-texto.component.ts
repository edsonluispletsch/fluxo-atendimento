import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lx-texto',
  templateUrl: './lx-texto.component.html',
  styleUrls: ['./lx-texto.component.css']
})
export class LxTextoComponent implements OnInit {

  @Input() texto: string;
  @Input() label: string;
  @Output() textoChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  notificarMudanca() {
    this.textoChange.emit(this.texto);
  }

}
