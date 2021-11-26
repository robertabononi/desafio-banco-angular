import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.scss']
})
export class UploadSelfieComponent implements OnInit {
  cpf = '';
  salarioMensal = '';
  API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage';
  formSelfie: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formSelfie = new FormGroup({
      selfie: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.salarioMensal = queryParams['salarioMensal'];
      this.cpf = queryParams['cpf'];
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
    this.router.navigate(['/infos'], {queryParams: {cpf:this.cpf, salarioMensal:this.salarioMensal}});
  }

}
