import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImpressumComponent } from './impressum/impressum.component';



export const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: '**',redirectTo: ''}
];
