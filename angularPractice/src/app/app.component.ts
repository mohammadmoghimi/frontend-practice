import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ToolbarComponent , CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularPractice';
}
