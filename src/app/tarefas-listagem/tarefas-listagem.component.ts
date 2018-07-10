import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas-listagem',
  templateUrl: './tarefas-listagem.component.html',
  styleUrls: ['./tarefas-listagem.component.css']
})
export class TarefasListagemComponent implements OnInit {

  tarefas: Array<any>;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.tarefaService.listar().subscribe(dados => this.tarefas = dados)
  }
}
