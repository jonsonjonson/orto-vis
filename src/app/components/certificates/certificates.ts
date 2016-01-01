import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'certificates'
})
@View({
  template: require('./certificates.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss'),
    require('./styles/certificates.scss')
  ]
})

export class Certificates { }
