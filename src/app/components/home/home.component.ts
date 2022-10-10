import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showHome = true

  public images = [
    {
      img: 'https://img.freepik.com/vetores-premium/o-avatar-do-perfil-de-usuario-feminino-e-uma-mulher-um-personagem-para-um-protetor-de-tela-com-emocoes_505620-617.jpg',
      text: 'aaaa',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/%C3%ADcone-masculino-do-avatar-no-estilo-liso-%C3%ADcone-masculino-do-usu%C3%A1rio-avatar-do-homem-dos-desenhos-animados-91462914.jpg',
      text: 'aaaa',
    },
    {
      img: 'https://static.vecteezy.com/ti/vetor-gratis/p1/4773704-rosto-de-uma-garota-com-um-sorriso-lindo-um-avatar-feminino-para-um-site-e-rede-social-vetor.jpg',
      text: 'aaaa',
    },
    {
      img: 'https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg',
      text: 'aaaa',
    },
    {
      img: 'http://ambiel.adv.br/wp-content/uploads/2021/07/avatar-user-1.jpg',
      text: 'aaaa',
    },
  ];

  constructor(private apiService: ApiService,private router: Router ) {}
  ngOnInit(): void {
  }

  acessaHome(){
this.showHome = true
//this.router.navigate(['/'])

  }

  acessaCadastro(){
this.showHome = false
//this.router.navigate(['/cadastro'])
  }


}

export interface imagens {
  img: string;
  text: string;
}
