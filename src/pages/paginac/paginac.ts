import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Http} from "@angular/http";

/**
 * Generated class for the PaginacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paginac',
  templateUrl: 'paginac.html',
})
export class PaginacPage {
  nombre = '';
  telefofono = '';
  correo = '';
  facebook = '';
  instagram = '';
  twitter = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public Http: Http) {

  }
  Home = HomePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginacPage');
  }

  goHome(){
    this.navCtrl.setRoot(this.Home);
  }

  agregar(){
    this.Http.get('/agregar/?nombre='+this.nombre+'&telefono='+this.telefofono+'&correo='+this.correo+'&facebook='+this.facebook+'&instagram='+this.instagram+'&twitter='+this.twitter)
      .subscribe(data=>{
      console.log(data.text());
      this.navCtrl.setRoot(this.Home);
    }
  );
  }
}
