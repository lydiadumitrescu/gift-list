import { Component } from '@angular/core';
import {
  GiftsService,
  GiftType,
} from '../services/gifts.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-gift',
  imports: [JsonPipe, FormsModule],
  templateUrl: './add-gift.component.html',
  styleUrl: './add-gift.component.css',
  providers: [GiftsService],
})
export class AddGiftComponent {
  gifts: GiftType[] = [];
  newGift: GiftType = {
    gift__name: '',
    gift__add: '',
    gift__desc: '',
    img_url: '',
    have_both: false,
    have_desc: '',
    reserved: false,
    display: true,
  };

  giftName: string = '';
  giftAdd: string = '';
  giftDesc: string = '';
  imgUrl: string = '';
  display: boolean = true;
  haveBoth: boolean = false;
  haveBothDesc: string = '';
  reserved: boolean = false;

  constructor(private giftsService: GiftsService) {
    this.gifts = this.giftsService.getGifts();
  }

  previewGift() {
    if(this.imgUrl.slice(this.imgUrl.length-4, this.imgUrl.length) !== '.jpg'){
      this.imgUrl =this.imgUrl.replace(/\W/g, ' ').split(' ').join('_')+".jpg";

    }
    this.newGift = {
      img_url: this.imgUrl,
      gift__name: this.giftName,
      have_desc: this.haveBothDesc,
      gift__desc: this.giftDesc,
      gift__add: this.giftAdd,
      have_both: this.haveBoth,
      reserved: this.reserved,
      display: this.display,
    };
  }

  addGift() {
    if (Object.keys(this.newGift).length > 0) {
      this.gifts = this.gifts.concat(this.newGift as GiftType);
    }
  }
}
