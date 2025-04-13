import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, BienvenidaComponent],
})
export class AppComponent {
  constructor() {}
}
