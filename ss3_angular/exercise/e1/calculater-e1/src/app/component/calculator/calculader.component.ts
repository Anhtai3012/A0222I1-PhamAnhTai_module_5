import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculader',
  templateUrl: './calculader.component.html',
  styleUrls: ['./calculader.component.css']
})
export class CalculaderComponent implements OnInit {

   firstNumber: number ;
   secondNumber: number;
    outputNumber: number;
    operator = "+";
 constructor() { }

  ngOnInit(): void {
  }

}
