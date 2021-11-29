import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBackToHome() {
    this.router.navigate(['/home']);
  }

}
