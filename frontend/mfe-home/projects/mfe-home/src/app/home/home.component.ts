import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formHome: FormGroup;

  constructor(
    private service: HomeService,
    private router: Router
  ) {
    this.formHome = new FormGroup({
      cpf: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  procurarCpf() {
    const cpfCliente = this.formHome.value.cpf;
    console.log(this.formHome.value);
    this.service.listarCpf(cpfCliente).subscribe(data => {
      console.log(data);
      const dadosCadastrais: any = data;
      console.log(dadosCadastrais.cliente);
      if(dadosCadastrais.cliente) {
        this.router.navigate(['/dados-cadastro'], {queryParams: {cpf:cpfCliente, userData:true}});
      } else {
        this.router.navigate(['/dados-cadastro'], {queryParams: {cpf:cpfCliente}});
      }
    });
  }

}
