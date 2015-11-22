import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'home'
})
@View({
  template: require('./home.html'),
  styles: [
    require('./styles/carousel.scss'),
    require('./styles/marketing-content.scss')
  ]
})

export class Home { }
