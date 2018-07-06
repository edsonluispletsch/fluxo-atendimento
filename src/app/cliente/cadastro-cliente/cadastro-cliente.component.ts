import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { TipoPessoa } from '../tipo-pessoa';
import { ClienteService } from '../cliente.service';

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
  pessoas: Pessoa[];
  porcentagemProgresso: number = 0;
  
  constructor(private svcCliente: ClienteService) { }

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

    let servicoClientes = this.svcCliente.getClientes();

    this.porcentagemProgresso = 50;      
    servicoClientes.subscribe( res => {
      this.pessoas = res;
      this.porcentagemProgresso = 100;
      if (this.pessoas == null) {
        this.pessoas = [];
      }

    })
  }    

  adicionarCliente() {
    let pessoa: Pessoa = {
      nomePessoa : "Neymar",
      tipoPessoa : TipoPessoa.Juidica
    }

    this.pessoas.push(pessoa);

    this.svcCliente.addCliente(pessoa).subscribe(res => {
      console.log(res);
    })
  }

  LevantarNeymar() : void {
    this.imagem = 'Imagem/NeymarEmPe.jpg';
  }

  DerrubarNeymar() : void {
    this.imagem = 'Imagem/NeymarCaido.jpg';
  }  
}
