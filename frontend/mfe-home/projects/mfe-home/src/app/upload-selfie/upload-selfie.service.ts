import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadSelfieService {

  constructor(private http: HttpClient) { }

  inputFileChange(event: any) {
    if(event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];
      const formData = new FormData();

      formData.append('foto', foto);
      this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage', formData).subscribe(
        resposta => console.log('Upload concluído.')
      )
    }
  }
}
