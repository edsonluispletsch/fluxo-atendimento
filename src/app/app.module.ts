import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from './cliente.service';
import { TipoPessoaComponent } from './cliente/tipo-pessoa/tipo-pessoa.component';
import { TipoClienteComponent } from './cliente/tipo-cliente/tipo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    TipoPessoaComponent,
    TipoClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
