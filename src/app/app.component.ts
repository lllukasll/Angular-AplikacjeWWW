import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>
        <img src="../assets/images/logo2.png" height="50px" style="margin-right: 10px"/>
        {{pageTitle}}
      </a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']"><i class="fa fa-home" style="margin-right: 10px"></i>Strona Główna</a></li>
      </ul>
    </nav>
    <div class='container-fluid'>
      <router-outlet></router-outlet>
    </div>
`
})
export class AppComponent {
  pageTitle: string = 'UWM - Aplikacje WWW';
}
