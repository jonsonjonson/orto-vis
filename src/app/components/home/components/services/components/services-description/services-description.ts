import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'services-description'
})
@View({
  template: require('./services-description.html'),
  styles: [
    require('../../../../../../styles/helpers.scss'),
    require('../../../../../../styles/main.scss')
  ]
})

export class Description { }
