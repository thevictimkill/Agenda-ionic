import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ContactosPageModule} from '../pages/contactos/contactos.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContactosPage} from "../pages/contactos/contactos";
import {PaginacPage} from "../pages/paginac/paginac";
import {PaginacPageModule} from "../pages/paginac/paginac.module";
import {HttpModule} from "@angular/http";
import {MostarPage} from "../pages/mostar/mostar";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MostarPage,
    PaginacPage,
    ContactosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactosPage,
    PaginacPage,
    MostarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
