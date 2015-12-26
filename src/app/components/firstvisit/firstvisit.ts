import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'firstvisit'
})
@View({
  template: require('./firstvisit.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class FirstVisit { }
