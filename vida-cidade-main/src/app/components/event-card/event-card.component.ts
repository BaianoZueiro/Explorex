import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() nome!: string;
  @Input() dataHora!: string;
  @Input() localizacao!: string;
  @Input() imagemUrl!: string;
  @Input() descricao!: string;
}
