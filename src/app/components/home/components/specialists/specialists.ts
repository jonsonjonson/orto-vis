import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'specialists'
})
@View({
  template: require('./specialists.html'),
  styles: [
    require('../../../../styles/helpers.scss'),
    require('../../../../styles/main.scss')
  ]
})

export class Specialists { }
