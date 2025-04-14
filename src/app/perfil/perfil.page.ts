import { Component } from '@angular/core';
import { ToastController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private toastController: ToastController) {}

  async guardarCambios() {
    const toast = await this.toastController.create({
      message: 'Cambios guardados exitosamente.',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}
