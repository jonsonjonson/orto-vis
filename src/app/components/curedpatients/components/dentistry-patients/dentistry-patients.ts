import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'dentistry-patients'
})
@View({
  template: require('./dentistry-patients.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss'),
    require('../../styles/curedpatients-gallery.scss')
  ]
})

export class DentistryPatients { }
