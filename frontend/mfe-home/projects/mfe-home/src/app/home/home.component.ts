import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf = '';

  constructor() { }
  
  procurarCPF(cpf: string) {
    console.log(cpf);
  }

  ngOnInit(): void {
  }

}
