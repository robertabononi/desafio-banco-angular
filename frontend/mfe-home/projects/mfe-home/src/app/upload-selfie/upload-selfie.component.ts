import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.scss']
})
export class UploadSelfieComponent implements OnInit {
  API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage'
  formSelfie: FormGroup;

  constructor(
    private http: HttpClient,
    private service: HomeService,
    private router: Router
  ) {
    this.formSelfie = new FormGroup({
      selfie: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  fazerUploadSelfie() {
    console.log('maoe!')
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

  onSubmit() {
    console.log(this.formSelfie);
    const cpfCliente = this.formSelfie.value.cpf;
    this.service.listarCpf(cpfCliente).subscribe(data => {
      console.log(data);
      const dadosCadastrais: any = data;
      console.log(dadosCadastrais.cliente);
      if(dadosCadastrais.cliente) {
        this.router.navigate(['/select-plan'], {queryParams: {cpf:cpfCliente, userData:true}});
      } else {
        this.router.navigate(['/select-plan'], {queryParams: {cpf:cpfCliente}});
      }
    });
  }

}
