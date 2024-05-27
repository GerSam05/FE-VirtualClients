import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../../home/home/home.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ NgOptimizedImage, RouterLink, HomeComponent ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
