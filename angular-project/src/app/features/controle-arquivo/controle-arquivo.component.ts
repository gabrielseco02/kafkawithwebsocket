import { Component } from '@angular/core';
import { ApiService } from 'src/common/api/api.service';

@Component({
  selector: 'app-controle-arquivo',
  templateUrl: './controle-arquivo.component.html',
  styleUrls: ['./controle-arquivo.component.scss']
})
export class ControleArquivoComponent {

  constructor(private api: ApiService) {

  }

  solicitarArquivo() {
    this.api.get('novo-arquivo').subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error: any) => {

      }
    })
  }
}
