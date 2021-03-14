import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveConfigService {
  private dummyKeyValue: string = "CC:50:E3:3B:F5:8B";
  constructor() { }

  saveKeyToStorage(key: string){
    localStorage.setItem("key", key);
  }

  getExisitingKeyFromStorage(): any{
    if(localStorage.getItem('key')) return localStorage.getItem('key');
    return this.dummyKeyValue;
  }

  isDummyKey(): boolean{
    if (localStorage.getItem('key') == this.dummyKeyValue) return true
    return false
  }
}
