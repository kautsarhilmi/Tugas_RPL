var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaporkehilanganPage } from '../laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../laporpenemuan/laporpenemuan';
var LaporPage = /** @class */ (function () {
    function LaporPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LaporPage.prototype.gotoLaporkehilanganPage = function () {
        this.navCtrl.push(LaporkehilanganPage);
    };
    LaporPage.prototype.gotoLaporpenemuanPage = function () {
        this.navCtrl.push(LaporpenemuanPage);
    };
    LaporPage = __decorate([
        Component({
            selector: 'page-lapor',
            templateUrl: 'lapor.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], LaporPage);
    return LaporPage;
}());
export { LaporPage };
//# sourceMappingURL=lapor.js.map