import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import giftsJson from '../../public/giftlist.json';
import pendingJson from '../../public/pending.json';
import { NgClass, NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {

}
