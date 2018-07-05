import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from './cliente.service';
import { TipoPessoaComponent } from './cliente/tipo-pessoa/tipo-pessoa.component';
import { TipoClienteComponent } from './cliente/tipo-cliente/tipo-cliente.component';
import {FormsModule} from '@angular/forms';
import { LxTextoComponent } from './lx-texto/lx-texto.component';
import { LxModalComponent } from './lx-modal/lx-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    TipoPessoaComponent,
    TipoClienteComponent,
    LxTextoComponent,
    LxModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
