import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appBackButtonTo]',
  standalone: true 
})
export class BackHomeButtonDirective implements OnInit {
  @Input() appBackButtonTo: string = '/';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    const button = this.renderer.createElement('a');
    this.renderer.addClass(button, 'back-btn');
    this.renderer.setStyle(button, 'cursor', 'pointer');

    const icon = this.renderer.createText('← ');
    const text = this.renderer.createText('Volver');

    this.renderer.appendChild(button, icon);
    this.renderer.appendChild(button, text);
    this.renderer.listen(button, 'click', () => {
      this.router.navigate([this.appBackButtonTo]);
    });

    // Insertamos al principio del elemento
    this.renderer.insertBefore(this.el.nativeElement, button, this.el.nativeElement.firstChild);
  }
}