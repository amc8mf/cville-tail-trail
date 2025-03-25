import { Component } from '@angular/core';
import { AutoCompleteComponent } from '../../util/autocomplete/autocomplete.component';

@Component({
  selector: 'app-home',
  imports: [AutoCompleteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}