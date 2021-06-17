import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";

/**
 * Generated class for the MostarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostar',
  templateUrl: 'mostar.html',
})
export class MostarPage {


  nombre = '';
  telefofono = '';
  correo = '';
  facebook = '';
  instagram = '';
  twitter = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public Http: Http) {
    let nombre = this.navParams.get('nombre');
    this.nombre = this.navParams.get('nombre');
    this.telefofono = this.navParams.get('telefono');
    this.correo = this.navParams.get('correo');
    this.facebook = this.navParams.get('facebook');
    this.instagram = this.navParams.get('instagram');
    this.twitter = this.navParams.get('twitter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostarPage');
  }

}
