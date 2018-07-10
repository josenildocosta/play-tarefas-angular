import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefasUrl = 'http://localhost:9000/tarefas/listar'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.tarefasUrl}`)
  }
}
