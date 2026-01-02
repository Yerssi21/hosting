import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements AfterViewInit {
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