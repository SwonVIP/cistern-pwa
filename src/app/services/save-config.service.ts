import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveConfigService {

  constructor() { }

  saveKeyToStorage(key: string){
    localStorage.setItem("key", key);
  }

  getExisitingKeyFromStorage(): any{
    if(localStorage.getItem('key')) return localStorage.getItem('key');
    return "CC:50:E3:3B:F5:8B";
  }
}
