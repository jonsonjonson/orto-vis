import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'about'
})
@View({
  template: require('./about.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class About { }
