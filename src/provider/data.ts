import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {
  public BASE_URL = 'http://localhost/cyduck';
  public data_plain = {nim: "", nama: "", username: "", email: "", no_hp: ""};
  public HAS_LOGGED_IN = 'status_login';
  
  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  login(data: any, role:string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('user_data', data);
    this.storage.set('role', role);
  };
  
  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.set('user_data', this.data_plain);
    this.storage.remove('role');
  };

  isLogin(){
    return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
      return value;
    });
  }

  getRole(){
    return this.storage.get('role').then((value)=>{
      return value;
    });
  }
  getData() {
    return this.storage.get('user_data').then((value) => {
      return value;
    });
  }

}