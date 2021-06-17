import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactosPage} from '../contactos/contactos';
import {PaginacPage} from "../paginac/paginac";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacto = ContactosPage;
  agregar = PaginacPage;
  constructor(public navCtrl: NavController) {

  }
  goContactos(){
    this.navCtrl.push(this.contacto);
  }

  goAgregar(){
    this.navCtrl.setRoot(this.agregar);
  }
}
