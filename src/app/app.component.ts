import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;
  activeRoute: string = 'home'

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleRoute(route:string){
    this.activeRoute = route
  }
}
