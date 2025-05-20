import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appBackHomeButton]',
  standalone: true,
})
export class BackHomeButtonDirective implements OnInit {
  @Input() appBackHomeButton: string = '/';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    const btn = this.renderer.createElement('a');
    this.renderer.setAttribute(btn, 'role', 'button');
    this.renderer.addClass(btn, 'back-btn');
    this.renderer.setStyle(btn, 'cursor', 'pointer');

    const icon = this.renderer.createText('← ');
    const label = this.renderer.createText('Volver');

    this.renderer.appendChild(btn, icon);
    this.renderer.appendChild(btn, label);

    this.renderer.listen(btn, 'click', () => {
      this.router.navigate([this.appBackHomeButton]);
    });

    this.renderer.appendChild(this.el.nativeElement, btn);
  }
}
