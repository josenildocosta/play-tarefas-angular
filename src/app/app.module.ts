import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefasListagemComponent } from './tarefas-listagem/tarefas-listagem.component';
import {TarefaService} from './tarefa.service'

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TarefasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
