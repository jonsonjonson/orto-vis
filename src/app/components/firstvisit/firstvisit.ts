import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'firstvisit'
})
@View({
  template: require('./firstvisit.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class FirstVisit { }
