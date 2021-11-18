import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  private readonly API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF';

  listarCpf(cpf: string) {
    return this.http.post(this.API, {cpf});
  }
}
