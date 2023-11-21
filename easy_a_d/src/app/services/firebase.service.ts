import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }


  consoleTest() {
    console.log('does this work?');
  }
}
