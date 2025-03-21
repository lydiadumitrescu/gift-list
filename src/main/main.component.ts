import { Component } from '@angular/core';

import { NgClass, NgFor, NgIf } from '@angular/common';
import { GiftsService, GiftType } from '../services/gifts.service';

@Component({
  selector: 'app-main',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [GiftsService],
})
export class MainComponent {
  gifts: GiftType[] | [] = [];

  constructor(private giftsService: GiftsService) {
    this.gifts = this.giftsService.getGifts();
  }

  onReservedCheckboxChange(event: Event) {
    const isReservedChecked = (event.target as HTMLInputElement).checked;
    this.gifts.forEach((g) => {
      if (!!g.reserved) {
        g.display = isReservedChecked;
      }
    });
  }

  onHaveBothCheckboxChange(event: Event) {
    const isHaveBothChecked = (event.target as HTMLInputElement).checked;
    this.gifts.forEach((g) => {
      if (!!g.have_both) {
        g.display = isHaveBothChecked && !g.reserved;
      }
    });
  }
}
