import { Injectable } from '@angular/core';
import giftsJson from '../../public/giftlist.json';
// import pendingJson from '../../public/pending.json';
// import haveBothJson from '../../public/haveBoth.json';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private gifts: GiftType[] | [] = [];

  constructor() {}

  getGifts() {
    if (this.gifts.length === 0) {
      this.gifts = giftsJson.map((g: GiftJsonType) => ensureGiftType(g));
      // this.gifts.push(
      //   ...pendingJson.map((g: GiftJsonType) => ensureGiftType(g))
      // );

      // this.gifts.push(
      //   ...haveBothJson.map((g: GiftJsonType) => ensureGiftType(g))
      // );
    }
    return this.gifts;
  }
}

export type GiftType = {
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
};

function ensureGiftType(gift: GiftJsonType): GiftType {
  return {
    display: typeof gift.display === 'undefined' ? true : gift.display,
    reserved: gift.reserved || false,
    have_both: gift.have_both || false,
    img_url: gift.img_url || '',
    have_desc: gift.have_desc || '',
    gift__name: gift.gift__name || '',
    gift__desc: gift.gift__desc || '',
    gift__add: gift.gift__add || '',
  };
}
