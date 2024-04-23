import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title : string = '' ;
  @Input() subtitle : string = '' ;
  @Input() icon : string = '' ;

  hasFooterContent(): boolean {
    return !!this.subtitle;
  }
}
