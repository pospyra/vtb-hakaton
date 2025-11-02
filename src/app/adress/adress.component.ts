import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adress',
  standalone: true,
  imports: [],
  templateUrl: './adress.component.html',
  styleUrl: './adress.component.css'
})
export class AdressComponent {

  //constructor(private dataService: DataService,
  constructor(
    private router: Router) { }

  sendAdress() {
    this.router.navigate(["/"]);
  }
}
