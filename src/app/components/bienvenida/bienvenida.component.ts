import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class BienvenidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
