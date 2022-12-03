import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  sum:number=0

  calculate(a:number,b:number){
    this.sum=a+b;
  }
}
