import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'prosthetics-patients'
})
@View({
  template: require('./prosthetics-patients.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss'),
    require('../../styles/curedpatients-gallery.scss')
  ]
})

export class ProstheticsPatients { }
