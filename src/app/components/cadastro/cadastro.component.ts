import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  senha = '123';
  constructor() {}

  ngOnInit(): void {}

  public addSenha(): boolean {
    if (this.senha === '123') {
      return true;
    } else {
      return false;
    }
  }
}
