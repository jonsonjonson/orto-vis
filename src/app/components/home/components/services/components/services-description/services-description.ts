import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'services-description'
})
@View({
  template: require('./services-description.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Description { }
