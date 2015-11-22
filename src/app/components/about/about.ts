import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'about'
})
@View({
  template: require('./about.html'),
  styles: [
    require('./styles/about.scss')
  ]
})

export class About { }
