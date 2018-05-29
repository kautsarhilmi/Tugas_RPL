var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../provider/data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { PenemuanPage } from '../pages/penemuan/penemuan';
import { KehilanganPage } from '../pages/kehilangan/kehilangan';
import { LaporPage } from '../pages/lapor/lapor';
import { LaporkehilanganPage } from '../pages/laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../pages/laporpenemuan/laporpenemuan';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                RegisterPage,
                MenuPage,
                PenemuanPage,
                KehilanganPage,
                LaporPage,
                LaporkehilanganPage,
                LaporpenemuanPage,
                ProfilePage,
                TabsPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                HttpModule,
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                RegisterPage,
                MenuPage,
                PenemuanPage,
                KehilanganPage,
                LaporPage,
                LaporkehilanganPage,
                LaporpenemuanPage,
                ProfilePage,
                TabsPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                DataProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map