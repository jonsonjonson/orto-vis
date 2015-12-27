// Annotations
import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

// Directives
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NgClass} from 'angular2/angular2';

// Components
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {FirstVisit} from './components/firstvisit/firstvisit';
import {Orthodontics} from './components/orthodontics/orthodontics';
import {Dentistry} from './components/dentistry/dentistry';
import {Prosthetics} from './components/prosthetics/prosthetics';
import {CuredPatients} from './components/curedpatients/curedpatients';
import {Contact} from './components/contact/contact';

import {MainCarosuel} from './components/shared-components/main-carosuel/main-carosuel';



@Component({
  selector: 'app'
})
@View({
  directives: [
    ROUTER_DIRECTIVES,
    NgClass,
    MainCarosuel
  ],
  template: require('./app.html'),
  styles: [
    require('./styles/navbar.scss'),
    require('./styles/footer.scss')
  ]
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/about', as: 'About', component: About },
  { path: '/firstvisit', as: 'FirstVisit', component: FirstVisit },
  { path: '/orthodontics', as: 'Orthodontics', component: Orthodontics },
  { path: '/dentistry', as: 'Dentistry', component: Dentistry },
  { path: '/prosthetics', as: 'Prosthetics', component: Prosthetics },
  { path: '/curedpatients', as: 'CuredPatients', component: CuredPatients },
  { path: '/contact', as: 'Contact', component: Contact }
])

export class App {
  state: { [item: string]: string; } = {};
  activate(item) {
    this.state = {};
    this.state[item] = "ortovis-menu__item--active";
  }
}
