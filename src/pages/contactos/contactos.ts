import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http"
import {PaginacPage} from "../paginac/paginac";
import {MostarPage} from "../mostar/mostar";

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  paginapage = PaginacPage;
  mostar = MostarPage;
  contactos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public  http: Http) {
    this.getContactos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  cliccontactos(i){
    this.navCtrl.push(this.mostar, i);
  }

  getContactos(){
    this.http.get('/contactos/').subscribe(data=> {
      this.contactos = data.json();
      console.log(data.text());
    },error1 => {
      console.log('error');
    });
  }


}
