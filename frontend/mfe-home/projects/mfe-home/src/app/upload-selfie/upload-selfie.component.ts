import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.scss']
})
export class UploadSelfieComponent implements OnInit {
  cpf = '';
  salario = '';
  API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage'
  formSelfie: FormGroup;

  constructor(
    private http: HttpClient,
    private service: HomeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formSelfie = new FormGroup({
      selfie: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salario = queryParams['salario'];
      console.log(this.cpf + this.salario);
    });
  }

  inputFileChange(event: any) {
    if(event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];
      const formData = new FormData();

      formData.append('filetoupload', foto);
      this.http.post(this.API, formData).subscribe(
        resposta => console.log('Upload concluído.', resposta)
      )
    }
  }

  fazerUploadSelfie() {
    console.log(this.formSelfie);
    const cpfCliente = this.formSelfie.value.cpf;
    const salarioCliente = this.formSelfie.value.salarioMensal;
    this.service.listarCpf(cpfCliente).subscribe(data => {
      console.log(data);
      const dadosCadastrais: any = data;
      console.log(dadosCadastrais.cliente);
      if(dadosCadastrais.cliente) {
        this.router.navigate(['/select-plan'], {queryParams: {cpf:cpfCliente, salario:salarioCliente}});
      } else {
        this.router.navigate(['/select-plan'], {queryParams: {cpf:cpfCliente}});
      }
    });
  }

}
