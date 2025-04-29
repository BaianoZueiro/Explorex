import { Component } from '@angular/core';
import { EventCardComponent } from "../../components/event-card/event-card.component";
import { EVENTOS_MOCK } from '../../../mock/mock';
import { Evento } from '../../model/Evento';

@Component({
  selector: 'app-home',
  imports: [EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventos: Evento[] = EVENTOS_MOCK;

}
