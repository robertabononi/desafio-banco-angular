import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF'

  constructor(private http: HttpClient) { }

  listarCpf(cpf: string) {
    return this.http.post(this.API, {cpf:cpf});
  }
}
