import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import giftsJson from '../../public/giftlist.json';
import pendingJson from '../../public/pending.json';
import { NgClass, NgFor, NgIf } from '@angular/common';

type GiftType = {
  img_url: string;
  gift__name: string;
  have_desc: string;
  gift__desc: string;
  gift__add: string;
  have_both: boolean;
  reserved: boolean;
  display: boolean;
};

type GiftJsonType = {
  img_url: string;
  gift__name: string;
  have_desc?: string;
  gift__desc?: string;
  gift__add?: string;
  have_both?: boolean;
  reserved?: boolean;
  display?: boolean;
}

function ensureGiftType(gift: GiftJsonType): GiftType {
  return {
    display: (typeof gift.display === "undefined" ? true : gift.display),
    reserved: gift.reserved || false,
    have_both: gift.have_both || false,
    img_url: gift.img_url || "",
    have_desc: gift.have_desc || "",
    gift__name: gift.gift__name || "",
    gift__desc: gift.gift__desc || "",
    gift__add: gift.gift__add || ""
  }
}
@Component({
  selector: 'app-main',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  gifts: GiftType[] = giftsJson.map(g => {
    return ensureGiftType(g as GiftJsonType);
  });
  constructor() {
    this.gifts.push(...pendingJson.map(g => {
      return ensureGiftType(g as GiftJsonType);
    }));
  }

  onReservedCheckboxChange(event: Event) {
    const isReservedChecked = (event.target as HTMLInputElement).checked;
    this.gifts.forEach(g => {
      if (!!g.reserved) {
        g.display = isReservedChecked;
      }
    });
  }

  onHaveBothCheckboxChange(event: Event) {
    const isHaveBothChecked = (event.target as HTMLInputElement).checked;
    this.gifts.forEach(g => {
      if (!!g.have_both) {
        g.display = isHaveBothChecked && !g.reserved;
      }
    });
  }
}
