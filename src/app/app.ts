// Annotations
import {Component, View, ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

// Directives
import {ROUTER_DIRECTIVES} from 'angular2/router';

// components
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';



@Component({
  selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html'),
  styles: [
    require('./styles/main.scss'),
    require('./styles/about_us.scss'),
    require('./styles/dentistry.scss'),
    require('./styles/first_visit.scss'),
    require('./styles/home.scss'),
    require('./styles/images.scss'),
    require('./styles/orthodontics.scss'),
    require('./styles/patients.scss'),
    require('./styles/prosthetics.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/about', as: 'About', component: About },
  { path: '/contact', as: 'Contact', component: Contact }
])

export class App { }
