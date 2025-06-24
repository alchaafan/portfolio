import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PrivacyComponent } from './privacy/privacy.component';



export const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: '**',redirectTo: ''}
];
