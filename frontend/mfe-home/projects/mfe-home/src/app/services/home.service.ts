import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosCadastrais } from '../dados-cadastro/dados-cadastrais';
import { AlterarPlano } from '../select-plan/alterar-plano';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF'
  private API2 ='http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes';
  private API3 = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Planos/planosDisponiveis';
  private APIAlterarPlano = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/alterarPlano';
  private API5 = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/buscarDados'


  constructor(private http: HttpClient) { }

  listarCpf(cpf: string) {
    return this.http.post(this.API, {cpf:cpf});
  }

  enviarDados(dadosCadastrais: DadosCadastrais) {
    return this.http.post(this.API2, dadosCadastrais);
  }

  listarPlanosPorRenda(rendaMensal: string) {
    return this.http.post(this.API3, {rendaMensal});
  }

  alterarPlano(plano: AlterarPlano) {
    return this.http.post(this.APIAlterarPlano, plano);
  }

  buscarDados(cpf: string) {
    return this.http.post(this.API5, {cpf});
  }

}
