import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeService } from './../../../../../../mfe-home/projects/mfe-home/src/app/services/home.service';
import { InfosAConfirmar } from './infos-aconfirmar';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  cpf = '';
  dados!: InfosAConfirmar;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
    });
    this.pegarDados();
  }

  pegarDados() {
    this.service.buscarDados(this.cpf).subscribe(dados => {
      const dadosCliente: any = dados;
      this.dados = dadosCliente.cliente;
    })
  }

  nextPage() {
    this.router.navigate(['/final-page']);
  }
}
