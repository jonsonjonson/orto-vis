import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'orthodontics-patients'
})
@View({
  template: require('./orthodontics-patients.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss'),
    require('../../styles/curedpatients-gallery.scss')
  ]
})

export class OrthodonticsPatients { }
