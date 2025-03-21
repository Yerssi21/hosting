import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.scss'
})
export class FormularioContactoComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Script de HubSpot Forms
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      window.hsFormsOnReady = window.hsFormsOnReady || [];
      window.hsFormsOnReady.push(() => {
        hbspt.forms.create({
          portalId: "26743474",
          formId: "e8e2a272-a8a0-4bc1-8ba8-fbd2ad8dd03b",
          target: "#hubspot-form",
          region: "eu1",
        });
      });
    `;
    this.renderer.appendChild(this.el.nativeElement, script);
  }

}
