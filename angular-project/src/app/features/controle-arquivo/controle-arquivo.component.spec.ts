import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleArquivoComponent } from './controle-arquivo.component';

describe('ControleArquivoComponent', () => {
  let component: ControleArquivoComponent;
  let fixture: ComponentFixture<ControleArquivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleArquivoComponent]
    });
    fixture = TestBed.createComponent(ControleArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
