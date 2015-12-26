import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'specialists'
})
@View({
  template: require('./specialists.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Specialists { }
