import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf = '';
  formHome: FormGroup;

  constructor(
    private service: HomeService
  ) {
    this.formHome = new FormGroup({
      cpf: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  procurarCpf() {
    const cpf = this.formHome.value.cpf;
    console.log(this.formHome.value);
    this.service.listarCpf(cpf).subscribe(data => {
      console.log(data)
    });
  }

}
