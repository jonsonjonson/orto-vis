import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'about'
})
@View({
  template: require('./about.html'),
  styles: [
    require('../../styles/helpers.scss'),
    require('../../styles/main.scss')
  ]
})

export class About { }
