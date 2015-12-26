import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'firstvisit'
})
@View({
  template: require('./firstvisit.html'),
  styles: [
    require('../../styles/helpers.scss'),
    require('../../styles/main.scss')
  ]
})

export class FirstVisit { }
