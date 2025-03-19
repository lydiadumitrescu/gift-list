import { Routes } from '@angular/router';
import { AddGiftComponent } from '../add-gift/add-gift.component';
import { MainComponent } from '../main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'add-gift',
        component: AddGiftComponent
    },
];
