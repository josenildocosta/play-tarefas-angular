import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasListagemComponent } from './tarefas-listagem.component';

describe('TarefasListagemComponent', () => {
  let component: TarefasListagemComponent;
  let fixture: ComponentFixture<TarefasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
