import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { TipoPessoaComponent } from './cliente/tipo-pessoa/tipo-pessoa.component';
import { TipoClienteComponent } from './cliente/tipo-cliente/tipo-cliente.component';
import {FormsModule} from '@angular/forms';
import { LxTextoComponent } from './lx-texto/lx-texto.component';
import { LxModalComponent } from './lx-modal/lx-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { LxProgressComponent } from './lx-progress/lx-progress.component';
import { LxColDirective } from './lx-col.directive';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    TipoPessoaComponent,
    TipoClienteComponent,
    LxTextoComponent,
    LxModalComponent,
    LxProgressComponent,
    LxColDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : "cadastro-cliente", component : CadastroClienteComponent }
    ])
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
