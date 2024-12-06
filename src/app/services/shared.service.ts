import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  tel: number = 0;
  role: String= 'user';

  setTel(value: number) {
    this.tel = value;
  }

  getTel(): number {
    return this.tel;
  }
  getRole():String{
    return this.role;
  }
  setRole(value: String) {
    this.role = value;
  }
}
