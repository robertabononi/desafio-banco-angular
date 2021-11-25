import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { AlterarPlano } from './alterar-plano';
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
  formPlanos: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: HomeService
  ) {
    this.formPlanos = new FormGroup({
      _id: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.salarioMensal = queryParams['salarioMensal'];
      this.cpf = queryParams['cpf'];
      this.selecionarPlano(this.salarioMensal)
    });
  }

  selecionarPlano(salario: string) {
    this.service.listarPlanosPorRenda(salario).subscribe(dados => {

      const planosPorSalario: any = dados;
      this.listaPlanos = planosPorSalario.planos;
    })
  }

  onChoosePlan() {
    const id = this.formPlanos.value._id;
    const planoSelecionado = this.filtrarPlanos(id);

    const alterarPlano: AlterarPlano = {
      cpf: this.cpf,
      plano: {
        custoMensal: planoSelecionado[0].custoMensal,
        tipoCartao: planoSelecionado[0].tipoCartao,
        tipoConta: planoSelecionado[0].tipoConta,
      }
    }
    this.service.alterarPlano(alterarPlano).subscribe(dados => {
    })
    this.router.navigate(['/mostrar-dados-cliente'], {queryParams: {cpf:this.cpf}})
  }

  filtrarPlanos(id: string) {
    const planoPorId = this.listaPlanos.filter(plano => {
      return plano._id === id;
    })
    return planoPorId;
  }
}
