import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterService } from '../../../core/services/filter.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private _filterService: FilterService) {}

  text: string = '';

  filtrarTexto() {
    const regex = /[^a-zA-Z0-9\sÑñÁÉÍÓÚáéíóÜü]/g;
    this._filterService.setText(this.text.trim().replace(regex, ''));
  }

  limpiarTexto() {
    if(this.text === ''){
      this._filterService.setText(this.text);
    }
  }
}
