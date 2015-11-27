// Annotations
import {Component, View} from 'angular2/angular2';
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
    require('./styles/footer.scss'),
    require('./styles/menu.scss')
  ]
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/about', as: 'About', component: About },
  { path: '/contact', as: 'Contact', component: Contact }
])

export class App { }
