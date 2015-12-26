import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'description'
})
@View({
  template: require('./description.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Description { }
