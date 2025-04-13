import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, IonCard]
})
export class AboutPage implements OnInit {
  info: string = 'Esta es la página About';

  constructor(private router: Router) { 

  }

  ngOnInit() {

  }

  goinicio() {
    this.router.navigate(['/inicio']);
  }
}