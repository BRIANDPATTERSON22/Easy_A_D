import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy_a_d';
constructor(public firebaseService: FirebaseService){

}

  test() {
this.firebaseService.consoleTest();
  }
}
