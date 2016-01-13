import {Component, View} from 'angular2/angular2';
import {ElementRef} from 'angular2/core';
declare var jQuery: any;

@Component({
  selector: 'main-carousel'
})
@View({
  template: require('./main-carousel.html'),
  styles: [
    require('./styles/carousel.scss')
  ]
})

export class MainCarousel {
  constructor(elementRef: ElementRef) {
    jQuery(elementRef.nativeElement)
      .find('.owl-carousel')
      .owlCarousel({
      items: 1,
      loop: true,
      lazyLoad: true,

      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,

      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });
  }
}
