import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-haz-tu-pedido',
  standalone: true,
  templateUrl: './haz-tu-pedido.component.html',
  styleUrls: ['./haz-tu-pedido.component.scss'],
})
export class HazTuPedidoComponent implements AfterViewInit {
  @ViewChildren('stepCard', { read: ElementRef }) stepCards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll<HTMLElement>('.js-observe');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
