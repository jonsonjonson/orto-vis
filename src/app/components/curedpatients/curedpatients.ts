import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'curedpatients'
})
@View({
  template: require('./curedpatients.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss'),
    require('./styles/curedpatient.scss'),
    require('./styles/curedpatients-gallery.scss')
  ]
})

export class CuredPatients { }
