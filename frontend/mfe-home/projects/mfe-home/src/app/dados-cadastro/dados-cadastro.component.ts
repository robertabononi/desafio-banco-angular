import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DadosCadastrais } from './dados-cadastrais';
import { DadosCadastroService } from './dados-cadastro.service';

@Component({
  selector: 'app-dados-cadastro',
  templateUrl: './dados-cadastro.component.html',
  styleUrls: ['./dados-cadastro.component.scss']
})
export class DadosCadastroComponent implements OnInit {

  cpf = '';
  dadosUsuario!: DadosCadastrais;
  userData = false;
  formCadastro: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: DadosCadastroService
  ) {
    this.formCadastro = new FormGroup({
      nomeCompleto: new FormControl (null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      cpf: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      dataNascimento: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dataCadastro: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      salarioMensal: new FormControl (null, [Validators.required]),
      senha: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      endereco: new FormGroup({
        cep: new FormControl (null, [Validators.required]),
        numero: new FormControl (null, Validators.required),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl (null, Validators.required),
        cidade: new FormControl (null, Validators.required),
        estado: new FormControl (null, Validators.required)
      }),
      numeroCelular: new FormControl (null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
    });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.userData = queryParams['userData'];
      //console.log(this.cpf + this.userData);

      if(this.userData) {
        this.pegarDados(this.cpf);
      } else {
        this.formCadastro.patchValue({
          cpf: this.cpf
        })
      }
    });
  }

  onSubmit() {
    console.log(this.formCadastro);
  }

  /* consultaCEP(cep: string) {
    this.http.get(`//viacep.com.br/ws/${cep}/json/`)
    .subscribe((dados: any) => console.log(dados))
  } */

  pegarDados(cpf: string) {
    this.service.pegarDadosCliente(cpf).subscribe(dados => {
      //console.log(dados);
      const conteudoFormulario: any = dados;
      this.dadosUsuario = conteudoFormulario.cliente;
      //console.log(this.dadosUsuario);
      this.preencherCampos(this.dadosUsuario);
    })
  }

  preencherCampos(dados: DadosCadastrais) {
    this.formCadastro.patchValue({
      nomeCompleto: dados.nomeCompleto,
      email: dados.email,
      cpf: dados.cpf,
      dataNascimento: dados.dataNascimento,
      dataCadastro: dados.dataCadastro,
      salarioMensal: dados.salarioMensal,
      senha:dados.senha,
      endereco: {
        cep: dados.endereco.cep,
        numero: dados.endereco.numero,
        rua: dados.endereco.rua,
        bairro: dados.endereco.bairro,
        cidade: dados.endereco.cidade,
        estado: dados.endereco.estado
      },
      numeroCelular: dados.numeroCelular
    });
  }
}
