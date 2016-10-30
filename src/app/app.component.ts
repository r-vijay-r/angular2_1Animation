import {Component, NgModule, animate, state, style, transition, trigger} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('openClose', [
    state('show', style({ opacity: 1 , height:'250px',transform: 'translateX(20%)'})),
    state('void', style({ opacity: 0 , height:'0px',transform: 'translateX(-150%)'})),
    transition(':enter', animate('1000ms ease-in')),
    transition(':leave', animate('1000ms ease-out'))
  ])
]
})
export class AppComponent {
  stateExpression: string
  constructor() { this.change(); }
  change() { this.stateExpression === 'show'? this.stateExpression = 'void':this.stateExpression = 'show'; }
}
