import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Plans } from './plans';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {
  cpf = '';
  salarioMensal = '';
  listaPlanos: Plans[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: HomeService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.salarioMensal = queryParams['salarioMensal'];
      this.cpf = queryParams['cpf'];
      console.log('salario: ', this.salarioMensal);

      this.selecionarPlano(this.salarioMensal)
    });
  }

  selecionarPlano(salario: string) {
    this.service.listarPlanosPorRenda(salario).subscribe(dados => {
      //console.log(dados);

      const planosPorSalario: any = dados;
      this.listaPlanos = planosPorSalario.planos;
      console.log('lista planos:', this.listaPlanos)
    })
  }

}
