import {
  Directive,
  ElementRef,
  Input,
  AfterViewChecked,
} from '@angular/core';
import Splide, { Options } from '@splidejs/splide';

@Directive({
  selector: '[appSplideCarousel]',
  standalone: true,
})
export class SplideCarouselDirective implements AfterViewChecked {
  @Input() perPage: number = 5;
  @Input() autoplay: boolean = true;
  @Input() interval: number = 3000;
  @Input() gap: string = '1rem';
  @Input() arrows: boolean = true;

  private mounted = false;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    if (!this.mounted && this.el.nativeElement?.querySelectorAll('.splide__slide').length > 0) {
      this.mounted = true;

      const options: Options = {
        type: 'loop',
        perPage: this.perPage,
        perMove: 1,
        autoplay: this.autoplay,
        interval: this.interval,
        gap: this.gap,
        pagination: false,
        arrows: false,
        rewind: true,
        breakpoints: {
          1200: { perPage: Math.min(this.perPage, 4) },
          1024: { perPage: Math.min(this.perPage, 3) },
          768: { perPage: Math.min(this.perPage, 2) },
          480: { perPage: 1 },
        },
      };

      new Splide(this.el.nativeElement, options).mount();
    }
  }
}
