import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-questions-common',   
  standalone: true,
  imports: [CommonModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './questions-common.component.html',
  styleUrl: './questions-common.component.scss'
})
export class QuestionsCommonComponent {

  questions = [
    {  
      title: '¿Cuánto tiempo tarda en llegar mi pedido?', 
      answer: 'Los tiempos de entrega varían según tu ubicación y el método de envío seleccionado. Normalmente, los envíos estándar tardan entre 7 a 15 días hábiles, mientras que los exprés pueden llegar en 5 a 7 días hábiles.', 
      isOpen: false 
    },
    { 
      title: '¿Cómo puedo rastrear mi pedido?', 
      answer: 'Puedes rastrear tu pedido en la sección "Mis Pedidos" dentro de tu cuenta o a través del enlace de seguimiento que recibirás por correo electrónico una vez que tu pedido haya sido enviado.', 
      isOpen: false 
    },
    { 
      title: '¿Cuánto cuesta el envío?', 
      answer: 'El costo del envío varía según el destino y el tipo de servicio seleccionado. Ofrecemos envío gratuito en pedidos superiores a [X] (dependiendo de promociones vigentes).', 
      isOpen: false 
    },
   ]

   toggleAnswer(index: number): void {
    this.questions[index].isOpen = !this.questions[index].isOpen;
  }

}
