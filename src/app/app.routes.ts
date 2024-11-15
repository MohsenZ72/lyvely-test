import { Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'

export const routes: Routes = [
  { path: '', redirectTo: '/profile/1', pathMatch: 'full' },
  { path: 'profile/:user-id', component: ProfileComponent },
  { path: '**', redirectTo: '/profile/1' }
]
