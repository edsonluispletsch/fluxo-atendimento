import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { TipoPessoa } from '../tipo-pessoa';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: string = "Proprietário";
  contador: number = 0;
  imagem: string;
  pessoa: Pessoa;
  
  constructor() { }

  ngOnInit() {
    let self = this;

    setTimeout(() => {
      self.cliente = "Proprietário iniciando...";
      self.imagem = "Imagem/NeymarEmPe.jpg";
    }, 1000);

    let interval = setInterval(() => {
      self.cliente = "Proprietário " + self.contador++;
      if (self.contador == 5){
        clearInterval(interval);
        self.imagem = "Imagem/NeymarCaido.jpg";
      }
    }, 2000);

    if (this.pessoa == null){
      this.pessoa = new Pessoa();
    this.pessoa.nomePessoa = 'Pletsch';
    this.pessoa.tipoPessoa = TipoPessoa.Juidica;
    }
  }    

  LevantarNeymar() : void {
    this.imagem = 'Imagem/NeymarEmPe.jpg';
  }

  DerrubarNeymar() : void {
    this.imagem = 'Imagem/NeymarCaido.jpg';
  }  
}
