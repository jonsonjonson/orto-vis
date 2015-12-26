import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'about'
})
@View({
  template: require('./about.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class About { }
